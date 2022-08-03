<script lang="ts">
	import SetupTask from './SetupTask.svelte';

	import { page } from '$app/stores';

	import Accordion from '$lib/components/Accordion.svelte';
	import { machines } from '$lib/data/stores/machines';

	$: machineId = $page.params.machineId;
	$: stepId = $page.params.stepId;

	$: currentStep = Object.keys($machines[machineId].setupSteps).indexOf(stepId);
	$: nextStepId = Object.keys($machines[machineId].setupSteps)[currentStep + 1];

	function setSetupStepDone() {
		machines.setDone(machineId, stepId);
	}
</script>

<h1>
	setup step {currentStep + 1}: <strong>{$machines[machineId].setupSteps[stepId].title.toLowerCase()}</strong>
</h1>

<Accordion>
	<div class="tasks">
		{#each Object.keys($machines[machineId].setupSteps[stepId].tasks) as taskId}
			<div class="task">
				<SetupTask {machineId} {stepId} {taskId} />
			</div>
		{/each}
	</div>
</Accordion>

{#if currentStep < Object.values($machines[machineId].setupSteps).length - 1}
	<a on:click={setSetupStepDone} class="button" href="/machines/{machineId}/setup/step/{nextStepId}">
		finish setup step {currentStep + 1}
	</a>
{:else}
	<a on:click={setSetupStepDone} class="button" href="/machines/{machineId}/operation"> finish setup </a>
{/if}

<style>
	.tasks {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: 1rem 1rem;
		width: 100%;
		max-width: 50rem;
	}

	.tasks > * + * {
		margin-top: 0.75rem;
	}

	.task {
		width: 100%;
	}

	.button {
		display: flex;
		align-items: center;

		margin-top: 1rem;
		padding: 0.75rem;

		color: var(--slate-100);
		background-color: green;
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>
