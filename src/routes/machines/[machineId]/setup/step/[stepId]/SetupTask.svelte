<script lang="ts">
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Confetti } from 'svelte-confetti';

	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { machines } from '$lib/data/stores/machines';
	import { Status } from '$lib/data/types/machines';

	export let machineId: string;
	export let taskId: string;
	export let stepId: string;

	function setSetupTaskTodo() {
		machines.setTodo(machineId, stepId, taskId);
	}

	function setSetupTaskSkipped() {
		machines.setSkipped(machineId, stepId, taskId);
	}

	function setSetupTaskDone() {
		machines.setDone(machineId, stepId, taskId);
	}

	$: status = $machines[machineId].setupSteps[stepId].tasks[taskId].status.default;

	let active = false;

	async function click() {
		active = false;
		await tick();
		active = true;
	}
</script>

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

	<div slot="footer">
		<div class="footer">
			<div class="footer-status">
				{#key status}
					<div in:fade>
						{#if status === Status.Todo}
							&#x2B1C;
						{:else if status === Status.Skipped}
							&#xE15E;
						{:else if status === Status.Done}
							&#xE15D;
						{/if}
					</div>
				{/key}
			</div>

			<div class="footer-buttons">
				<button on:click={setSetupTaskTodo} class:active={status === Status.Todo} type="button">todo</button>
				<button on:click={setSetupTaskSkipped} class:active={status === Status.Skipped} type="button">skip</button>
				<span on:click={click} class="relative">
					<button on:click={setSetupTaskDone} class:active={status === Status.Done} class="done-button" type="button"
						>done</button
					>
					{#if active}
						<div class="confetti">
							<Confetti />
						</div>
					{/if}
				</span>
			</div>
		</div>
	</div>
</AccordionItem>

<style>
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer-status {
		display: flex;
		align-items: center;
	}

	.footer-buttons {
		display: flex;
		align-items: center;
	}

	button {
		display: flex;
		align-items: center;

		padding: 0.5rem 0.75rem;
		margin: 0rem 0.25rem;

		color: var(--slate-500);
		background-color: var(--slate-300);
		border: 2px solid;
		border-color: var(--slate-300);
		border-radius: 0.5rem;
	}

	button:hover {
		color: var(--slate-800);
		background-color: var(--slate-400);
	}

	.active {
		color: var(--slate-800);
		border-color: var(--slate-500);
		font-weight: 600;
	}

	.done-button {
		margin-right: 0;
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
</style>
