<script lang="ts">
	import { tick } from 'svelte';

	import { Confetti } from 'svelte-confetti';

	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { machines } from '$lib/data/stores/machines';

	export let machineId: string;
	export let taskId: string;
	export let stepId: string;

	function toggleDone() {
		machines.toggleDone(machineId, stepId, taskId);
	}

	$: done = $machines[machineId].setupSteps[stepId].tasks[taskId].done.default;

	let active = false;

	async function click() {
		if (done) {
			active = false;
			await tick();
			active = true;
		}
	}
</script>

<div class="task">
	<span on:click={click} class="relative">
		<input type="checkbox" on:click={toggleDone} checked={done} />
		{#if active}
			<div class="confetti">
				<Confetti />
			</div>
		{/if}
	</span>

	<div class="task-content">
		<AccordionItem key={taskId}>
			<div slot="header-title">
				{$machines[machineId].setupSteps[stepId].tasks[taskId].title.toLocaleLowerCase()}
			</div>

			<div slot="body">
				{#if $machines[machineId].setupSteps[stepId].tasks[taskId].desc !== undefined}
					{$machines[machineId].setupSteps[stepId].tasks[taskId].desc}
				{:else}
					no description available
				{/if}
			</div>
		</AccordionItem>
	</div>
</div>

<style>
	.task {
		display: flex;
		align-items: start;
	}

	input[type='checkbox'] {
		width: 2.5rem;
		height: 2.5rem;
		margin-top: 0.3rem;
		margin-right: 0.75rem;

		background-color: var(--slate-100);
		border: 2px solid var(--slate-500);
		border-radius: 0.25rem;
		cursor: pointer;
	}

	input[type='checkbox']:checked:after {
		content: '';
		display: block;
		width: 1rem;
		height: 2rem;
		border: solid green;
		border-width: 0 6px 6px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
		position: relative;
		top: 0px;
		left: 0.6rem;
	}

	.relative {
		position: relative;
	}

	.relative .confetti {
		position: absolute;
		top: 50%;
		left: 50%;
	}

	.confetti {
		pointer-events: none;
	}

	.task-content {
		flex-grow: 1;
	}
</style>
