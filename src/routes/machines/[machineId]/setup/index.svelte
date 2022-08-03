<script lang="ts">
	import { page } from '$app/stores';

	import { machines } from '$lib/data/stores/machines';

	import SetupStep from './_SetupStep.svelte';

	$: machineId = $page.params.machineId;
</script>

<h1>
	the setup for the <strong>{$machines[machineId].title.toLowerCase()}</strong> machine consists of the following steps:
</h1>

<div class="steps">
	{#each Object.keys($machines[machineId].setupSteps) as stepId, i}
		<div>
			<SetupStep {i} {machineId} {stepId} />
		</div>
	{/each}
</div>

<a class="button" href="/machines/{machineId}/setup/step/{Object.keys($machines[machineId].setupSteps)[0]}"
	>let's get started!
</a>

<style>
	.steps {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 1rem;
		width: 100%;
	}

	.steps > div {
		width: 100%;
		max-width: 40rem;
	}

	.steps > * + * {
		margin-top: 0.5rem;
	}

	.button {
		display: flex;
		align-items: center;

		margin-top: 1rem;
		padding: 0.75rem;

		background-color: green;
		color: var(--slate-100);
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>
