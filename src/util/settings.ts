import Ajv from 'ajv';

import schema from '../schemas/schema_SettingsType.json';

import { readTextFile, writeTextFile, createDir, BaseDirectory } from '@tauri-apps/api/fs';
import { resolve, configDir } from '@tauri-apps/api/path';
import { exists } from 'tauri-plugin-fs-extra-api';

import type { SettingsType, SetupStepSettingsType } from '../models/settings';

const configDirPath = await configDir();
const settingsDir = 'mikrofabriken-checklists';
const settingsFileName = `${settingsDir}/settings.json`;
const settingsPath = await resolve(configDirPath, settingsFileName);

const ajv = new Ajv();

const defaultSettings: SettingsType = {
	machineSettings: {}
};

export async function loadSettings(): Promise<SettingsType> {
	let settings: SettingsType;
	let settingsFileExists = await exists(settingsPath);

	if (settingsFileExists) {
		let settingsString = await readTextFile(settingsFileName, { dir: BaseDirectory.Config });
		settings = JSON.parse(settingsString);
	} else {
		settings = structuredClone(defaultSettings);
	}

	const valid = ajv.validate(schema, settings);

	if (!valid) {
		throw Error('settings file is not formatted correctly');
	}

	return settings;
}

export async function writeSettings(settings: SettingsType) {
	await createDir(settingsDir, { dir: BaseDirectory.Config, recursive: true });
	await writeTextFile(settingsFileName, JSON.stringify(settings), { dir: BaseDirectory.Config });
}

export async function getSetupStep(machine: string, step: number): Promise<SetupStepSettingsType> {
	let settings = await loadSettings();

	if (Object.hasOwn(settings.machineSettings, machine)) {
		if (Object.hasOwn(settings.machineSettings[machine].setupStepSettings, step)) {
			return settings.machineSettings[machine].setupStepSettings[step];
		}
	}

	return { done: false, skipped: false, setupStepTaskSettings: {} };
}

export async function getSetupStepDone(machine: string, step: number): Promise<boolean> {
	let settings = await loadSettings();

	if (Object.hasOwn(settings.machineSettings, machine)) {
		if (Object.hasOwn(settings.machineSettings[machine].setupStepSettings, step)) {
			let done = settings.machineSettings[machine].setupStepSettings[step].done;
			return done;
		}
	}

	return false;
}

export async function setSetupStepDone(machine: string, step: number, done: boolean) {
	let settings = await loadSettings();

	if (Object.hasOwn(settings.machineSettings, machine)) {
		if (Object.hasOwn(settings.machineSettings[machine].setupStepSettings, step)) {
			settings.machineSettings[machine].setupStepSettings[step].done = done;
		} else {
			settings.machineSettings[machine].setupStepSettings[step] = {
				done: done,
				skipped: false,
				setupStepTaskSettings: {}
			};
		}
	} else {
		settings.machineSettings[machine] = {
			setupStepSettings: {
				[step]: {
					done: done,
					skipped: false,
					setupStepTaskSettings: {}
				}
			}
		};
	}

	writeSettings(settings);
}

export async function resetSetupSteps(machine: string) {
	let settings = await loadSettings();

	if (Object.hasOwn(settings.machineSettings, machine)) {
		for (const id in settings.machineSettings[machine].setupStepSettings) {
			settings.machineSettings[machine].setupStepSettings[id].done = false;
			settings.machineSettings[machine].setupStepSettings[id].skipped = false;
			settings.machineSettings[machine].setupStepSettings[id].setupStepTaskSettings = {};
		}
	} else {
		settings.machineSettings[machine] = {
			setupStepSettings: {}
		};
	}

	writeSettings(settings);
}
