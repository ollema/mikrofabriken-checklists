<script lang="ts">
	import { page } from '$app/stores';

	import { machines } from '$lib/data/stores/machines';

	$: machineId = $page.params.machineId;
</script>

<h1>
	the setup for the <strong>{$machines[machineId].title.toLowerCase()}</strong> machine consists of the following steps:
</h1>

<div class="steps">
	{#each Object.keys($machines[machineId].setupSteps) as stepId, i}
		<div class="step">
			{i + 1}: {$machines[machineId].setupSteps[stepId].title.toLowerCase()}
		</div>
	{/each}
</div>

<a href="/machines/{machineId}/setup/step/{Object.keys($machines[machineId].setupSteps)[0]}">let's get started! </a>

<style>
	.steps {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 2rem;
		width: 100%;
	}

	.steps > * + * {
		margin-top: 0.5rem;
	}
</style>
