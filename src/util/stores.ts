import { BaseDirectory, createDir, readTextFile, writeTextFile } from '@tauri-apps/api/fs';
import { configDir, resolve } from '@tauri-apps/api/path';
import { exists } from 'tauri-plugin-fs-extra-api';

import Ajv from 'ajv';

import { writable, derived, type Writable } from 'svelte/store';

import type { MachinesType } from '../models/machine';
import type { SettingsType } from '../models/settings';

import schema from '../schemas/schema_SettingsType.json';

import { laser } from './data/laser';

const configDirPath = await configDir();
const settingsDir = 'mikrofabriken-checklists';
const settingsFileName = `${settingsDir}/settings.json`;
const settingsPath = await resolve(configDirPath, settingsFileName);

export async function loadSettings(): Promise<SettingsType> {
	await createDir(settingsDir, { dir: BaseDirectory.Config, recursive: true });

	let settings: SettingsType;
	let settingsFileExists = await exists(settingsPath);

	if (settingsFileExists) {
		let settingsString = await readTextFile(settingsFileName, { dir: BaseDirectory.Config });
		settings = JSON.parse(settingsString);
	} else {
		settings = structuredClone({ machineSettings: {} });
	}

	const ajv = new Ajv();
	const valid = ajv.validate(schema, settings);

	if (!valid) {
		throw Error('settings file is not formatted correctly');
	}

	return settings;
}

export async function writeSettings(settings: SettingsType) {
	await writeTextFile(settingsFileName, JSON.stringify(settings, null, 2), { dir: BaseDirectory.Config });
}

export const createSettingsStore = async () => {
	// load settings from file if possible or default to empty settings
	const settings = await loadSettings();

	// initialize store
	const { subscribe, set, update } = writable(settings);

	// update .set of store to also update settings file
	return {
		subscribe,
		set: (settings: SettingsType) => {
			writeSettings(settings);
			return set(settings);
		},
		update
	};
};

export const settings = await createSettingsStore();

export const defaultMachines = { laser: laser };

function setMachinesStoreFromSettingsStore(settings: SettingsType): MachinesType {
	// start with the machine data only
	let machines = structuredClone(defaultMachines);

	// for each machine
	Object.entries(machines).forEach((machineMapping) => {
		let [slug, machine] = machineMapping;

		// for each setup step
		Object.entries(machine.setupSteps).forEach((setupStepMapping) => {
			let [id, setupStep] = setupStepMapping;

			// if there is an entry for this setup step in the settings store/file
			if (
				Object.hasOwn(settings.machineSettings, slug) &&
				Object.hasOwn(settings.machineSettings[slug].setupStepSettings, +id)
			) {
				// use existing values
				setupStep.done = settings.machineSettings[slug].setupStepSettings[+id].done;
				setupStep.skipped = settings.machineSettings[slug].setupStepSettings[+id].skipped;
			} else {
				// else use defaults
				setupStep.done = false;
				setupStep.skipped = false;
			}
		});
	});

	// return updated machines store
	return machines;
}

export const machines = <Writable<MachinesType>>derived(settings, setMachinesStoreFromSettingsStore);
