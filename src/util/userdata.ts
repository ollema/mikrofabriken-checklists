import Ajv from 'ajv';

import userdataSchema from '../schemas/userdataSchema.json';

import { BaseDirectory, createDir, readTextFile, writeTextFile } from '@tauri-apps/api/fs';

import type { UserdataType } from '../models/userdata';

const userdataDir = 'mikrofabriken-checklists';
const userdataPath = `${userdataDir}/userdata.json`;
await createDir(userdataDir, { dir: BaseDirectory.Config, recursive: true });

export async function loadUserdata(): Promise<UserdataType> {
	let userdata: UserdataType;
	try {
		userdata = JSON.parse(await readTextFile(userdataPath, { dir: BaseDirectory.Config }));
	} catch {
		userdata = { machineSettings: {} };
	}

	const ajv = new Ajv();
	const valid = ajv.validate(userdataSchema, userdata);

	if (!valid) {
		throw Error('userdata.json file is not formatted correctly');
	}

	return userdata;
}

export async function writeUserdata(userdata: UserdataType) {
	await writeTextFile(userdataPath, JSON.stringify(userdata, null, 2), { dir: BaseDirectory.Config });
}
