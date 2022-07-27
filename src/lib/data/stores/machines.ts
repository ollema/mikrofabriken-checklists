import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

import { Status, type MachinesType } from '$lib/data/types/machines';
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

	function setStatus(status: Status, machineId: string, stepId: string, taskId?: string) {
		// const key = constructKey(machineId, stepId, taskId);

		if (taskId) {
			store.update(
				($store) => (($store[machineId].setupSteps[stepId].tasks[taskId].status = { default: status }), $store)
			);
		} else {
			store.update(($store) => (($store[machineId].setupSteps[stepId].status = { default: status }), $store));
		}
		// fetch(`/api/set_state/id?state=${newState}`);
	}

	function setTodo(machineId: string, stepId: string, taskId?: string) {
		setStatus(Status.Todo, machineId, stepId, taskId);
	}

	function setDone(machineId: string, stepId: string, taskId?: string) {
		setStatus(Status.Done, machineId, stepId, taskId);
	}

	function resetSetupStep(machineId: string, stepId: string) {
		Object.keys(get(store)[machineId].setupSteps[stepId].tasks).forEach((taskId) => {
			setTodo(machineId, stepId, taskId);
		});
		setTodo(machineId, stepId);
	}

	function resetSetup(machineId: string) {
		Object.keys(get(store)[machineId].setupSteps).forEach((stepId) => {
			resetSetupStep(machineId, stepId);
		});
	}

	return {
		subscribe: store.subscribe,
		setTodo,
		setDone,
		resetSetupStep,
		resetSetup
	};
}

export const machines = machinesStore();
