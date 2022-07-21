import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

import { Status, type MachinesType } from '$data/types/machines';
import { laser } from '$data/machines/laser';

function constructKey(slug: string, stepId: string, taskId?: string) {
	if (taskId) {
		return `${slug} - ${stepId} - ${taskId}`;
	} else {
		return `${slug} - ${stepId}`;
	}
}

function initializeStore(): MachinesType {
	return { laser: laser };
}

function machinesStore() {
	const store = <Writable<MachinesType>>writable(initializeStore());

	function setStatus(status: Status, slug: string, stepId: string, taskId?: string) {
		const key = constructKey(slug, stepId, taskId);

		if (taskId) {
			store.update(($store) => (($store[slug].setupSteps[stepId].tasks[taskId].status = { default: status }), $store));
		} else {
			store.update(($store) => (($store[slug].setupSteps[stepId].status = { default: status }), $store));
		}
		// fetch(`/api/set_state/id?state=${newState}`);
	}

	function setTodo(slug: string, stepId: string, taskId?: string) {
		setStatus(Status.Todo, slug, stepId, taskId);
	}

	function setDone(slug: string, stepId: string, taskId?: string) {
		setStatus(Status.Done, slug, stepId, taskId);
	}

	return {
		subscribe: store.subscribe,
		setTodo,
		setDone
	};
}

export const machines = machinesStore();
