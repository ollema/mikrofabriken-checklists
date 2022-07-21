import Database from 'tauri-plugin-sql-api';
import { Status } from '$data/types/machines';

const db = await Database.load('sqlite:mikrofabriken-checklists.db');

function constructKey(machineSlug: string, setupStepId: string, setupStepTaskId?: string) {
	if (setupStepTaskId) {
		return `${machineSlug} - ${setupStepId} - ${setupStepTaskId}`;
	} else {
		return `${machineSlug} - ${setupStepId}`;
	}
}

export async function getStatus(machineSlug: string, setupStepId: string, setupStepTaskId?: string): Promise<Status> {
	const key = constructKey(machineSlug, setupStepId, setupStepTaskId);
	const query = `--sql
        SELECT * FROM setup_status_kv WHERE key = $1
    `;
	const result = <Object[]>await db.select(query, [key]);

	if (result.length > 0) {
		if (Object.hasOwn(result[0], 'value')) {
			if (result['value'] === Status.Skipped) {
				return Status.Skipped;
			}
			if (result[0]['value'] === Status.Done) {
				return Status.Done;
			}
		}
	}
	return Status.Todo;
}

export async function setStatus(status: Status, machineSlug: string, setupStepId: string, setupStepTaskId?: string) {
	const key = constructKey(machineSlug, setupStepId, setupStepTaskId);
	const query = `--sql
        INSERT INTO setup_status_kv (key, value) VALUES ($1, $2) ON CONFLICT(key) DO UPDATE SET value = excluded.value
    `;
	await db.execute(query, [key, status]);
}

export async function setTodo(machineSlug: string, setupStepId: string, setupStepTaskId?: string) {
	await setStatus(Status.Todo, machineSlug, setupStepId, setupStepTaskId);
}

export async function setSkipped(machineSlug: string, setupStepId: string, setupStepTaskId?: string) {
	await setStatus(Status.Skipped, machineSlug, setupStepId, setupStepTaskId);
}

export async function setDone(machineSlug: string, setupStepId: string, setupStepTaskId?: string) {
	await setStatus(Status.Done, machineSlug, setupStepId, setupStepTaskId);
}

export async function isTodo(machineSlug: string, setupStepId: string, setupStepTaskId?: string): Promise<boolean> {
	const status = await getStatus(machineSlug, setupStepId, setupStepTaskId);
	return status === Status.Todo;
}

export async function isSkipped(machineSlug: string, setupStepId: string, setupStepTaskId?: string): Promise<boolean> {
	const status = await getStatus(machineSlug, setupStepId, setupStepTaskId);
	return status === Status.Skipped;
}

export async function isDone(machineSlug: string, setupStepId: string, setupStepTaskId?: string): Promise<boolean> {
	const status = await getStatus(machineSlug, setupStepId, setupStepTaskId);
	return status === Status.Done;
}
