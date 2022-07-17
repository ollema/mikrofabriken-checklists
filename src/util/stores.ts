import { derived, get, writable, type Writable } from 'svelte/store';

import type { MachinesType } from '../models/machine';
import type { UserdataType } from '../models/userdata';

import { laser } from './data/laser';
import { loadUserdata, writeUserdata } from './userdata';

const _machines = { laser: laser };

export const createUserdataStore = async () => {
	// initialize store with user data from file if applicable
	const { subscribe, set, update } = writable(await loadUserdata());

	// update .set of store to also update user data file
	return {
		subscribe,
		set: (userdata: UserdataType) => {
			writeUserdata(userdata);
			return set(userdata);
		},
		update
	};
};

export const userdata = await createUserdataStore();

export function setSetupStepDone(slug: string, id: number) {
	const _userdata = get(userdata);
	if (Object.hasOwn(_userdata.machineSettings, slug)) {
		if (Object.hasOwn(_userdata.machineSettings[slug].setupStepSettings, id)) {
			_userdata.machineSettings[slug].setupStepSettings[id].done = true;
			_userdata.machineSettings[slug].setupStepSettings[id].skipped = false;
		} else {
			_userdata.machineSettings[slug].setupStepSettings[id] = { done: true, skipped: false, setupStepTaskSettings: {} };
		}
	} else {
		_userdata.machineSettings[slug] = {
			setupStepSettings: {
				[id]: { done: true, skipped: false, setupStepTaskSettings: {} }
			}
		};
	}
	userdata.set(_userdata);
}

export function resetSetupSteps(slug: string) {
	const _userdata = get(userdata);
	Object.keys(_userdata.machineSettings[slug].setupStepSettings).forEach((id) => {
		_userdata.machineSettings[slug].setupStepSettings[id] = { done: false, skipped: false, setupStepTaskSettings: {} };
	});
	userdata.set(_userdata);
}

export function toggleSetupStepTaskDone(slug: string, setupStepId: number, setupStepTaskId: number) {
	const _userdata = get(userdata);
	if (Object.hasOwn(_userdata.machineSettings, slug)) {
		if (Object.hasOwn(_userdata.machineSettings[slug].setupStepSettings, setupStepId)) {
			_userdata.machineSettings[slug].setupStepSettings[setupStepId].done = true;
			_userdata.machineSettings[slug].setupStepSettings[setupStepId].skipped = false;
		} else {
			_userdata.machineSettings[slug].setupStepSettings[setupStepId] = {
				done: true,
				skipped: false,
				setupStepTaskSettings: { [setupStepTaskId]: { done: true, skipped: false } }
			};
		}
	} else {
		_userdata.machineSettings[slug] = {
			setupStepSettings: {
				[setupStepId]: {
					done: true,
					skipped: false,
					setupStepTaskSettings: {
						[setupStepTaskId]: { done: true, skipped: false }
					}
				}
			}
		};
	}
	userdata.set(_userdata);
}

export const defaultMachines = { laser: laser };

function deriveMachinesStoreFromUserdata(userdata: UserdataType): MachinesType {
	// start with machine data only
	const machines = structuredClone(_machines);

	// for each machine
	Object.entries(machines).forEach((machineMapping) => {
		const [slug, machine] = machineMapping;

		// for each setup step
		Object.entries(machine.setupSteps).forEach((setupStepMapping) => {
			const [setupStepId, setupStep] = setupStepMapping;

			// if there is an entry for this setup step in the userdata store
			if (
				Object.hasOwn(userdata.machineSettings, slug) &&
				Object.hasOwn(userdata.machineSettings[slug].setupStepSettings, +setupStepId)
			) {
				// use existing values
				setupStep.done = userdata.machineSettings[slug].setupStepSettings[+setupStepId].done;
				setupStep.skipped = userdata.machineSettings[slug].setupStepSettings[+setupStepId].skipped;
			} else {
				// else use defaults
				setupStep.done = false;
				setupStep.skipped = false;
			}

			// for each setup step sub task
			Object.entries(setupStep.setupStepTasks).forEach((setupStepTaskMapping) => {
				const [setupStepTaskId, setupStepTask] = setupStepTaskMapping;

				// if there is an entry for this setup step sub task in the userdata store
				if (
					Object.hasOwn(userdata.machineSettings, slug) &&
					Object.hasOwn(userdata.machineSettings[slug].setupStepSettings, +setupStepId) &&
					Object.hasOwn(
						userdata.machineSettings[slug].setupStepSettings[+setupStepId].setupStepTaskSettings,
						setupStepTaskId
					)
				) {
					// use existing values
					let setupStepTaskSettings =
						userdata.machineSettings[slug].setupStepSettings[+setupStepId].setupStepTaskSettings[+setupStepTaskId];
					setupStepTask.done = setupStepTaskSettings.done;
					setupStepTask.skipped = setupStepTaskSettings.skipped;
				} else {
					// else use defaults
					setupStepTask.done = false;
					setupStepTask.skipped = false;
				}
			});
		});
	});

	// return updated machines store
	return machines;
}

export const machines = <Writable<MachinesType>>derived(userdata, deriveMachinesStoreFromUserdata);
