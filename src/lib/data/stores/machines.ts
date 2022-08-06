import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

import type { MachinesType } from '$lib/data/types/machines';
import { laser } from '$lib/data/machines/laser';

// function constructKey(machineId: string, stepId: string, taskId?: string) {
// 	if (taskId) {
// 		return `${machineId} - ${stepId} - ${taskId}`;
// 	} else {
// 		return `${machineId} - ${stepId}`;
// 	}
// }

function initializeStore(): MachinesType {
	return { laser: laser };
}

function machinesStore() {
	const store = <Writable<MachinesType>>writable(initializeStore());

	function setDone(done: boolean, machineId: string, stepId: string, taskId?: string) {
		// const key = constructKey(machineId, stepId, taskId);

		if (taskId) {
			store.update(($store) => (($store[machineId].setupSteps[stepId].tasks[taskId].done = { default: done }), $store));
		} else {
			store.update(($store) => (($store[machineId].setupSteps[stepId].done = { default: done }), $store));
		}
		// fetch(`/api/set_state/id?state=${newState}`);
	}

	function toggleDone(machineId: string, stepId: string, taskId?: string) {
		if (taskId) {
			setDone(!get(store)[machineId].setupSteps[stepId].tasks[taskId].done.default, machineId, stepId, taskId);
		} else {
			setDone(!get(store)[machineId].setupSteps[stepId].done.default, machineId, stepId, taskId);
		}
	}

	function resetSetupStep(machineId: string, stepId: string) {
		Object.keys(get(store)[machineId].setupSteps[stepId].tasks).forEach((taskId) => {
			setDone(false, machineId, stepId, taskId);
		});
		setDone(false, machineId, stepId);
	}

	function resetSetup(machineId: string) {
		Object.keys(get(store)[machineId].setupSteps).forEach((stepId) => {
			resetSetupStep(machineId, stepId);
		});
	}

	return {
		subscribe: store.subscribe,
		setDone,
		toggleDone,
		resetSetupStep,
		resetSetup
	};
}

export const machines = machinesStore();
