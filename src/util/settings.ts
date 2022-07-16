import Ajv from 'ajv';

import settingsSchema from '../schemas/schema_SettingsType.json';

import { readTextFile, writeTextFile, createDir, BaseDirectory } from '@tauri-apps/api/fs';
import { resolve, configDir } from '@tauri-apps/api/path';
import { exists } from 'tauri-plugin-fs-extra-api';

import type { SettingsType } from '../models/settings';

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
	const settingsFileExists = await exists(settingsPath);

	if (settingsFileExists) {
		const settingsString = await readTextFile(settingsFileName, { dir: BaseDirectory.Config });
		settings = JSON.parse(settingsString);
	} else {
		settings = structuredClone(defaultSettings);
	}

	const valid = ajv.validate(settingsSchema, settings);

	if (!valid) {
		throw Error('settings file is not formatted correctly');
	}

	return settings;
}

export async function writeSettings(settings: SettingsType) {
	await createDir(settingsDir, { dir: BaseDirectory.Config, recursive: true });
	await writeTextFile(settingsFileName, JSON.stringify(settings), { dir: BaseDirectory.Config });
}
