<script lang="ts">
	import { machines } from '../../../../data/machines/machines';
	import { setDone } from '../../../../data/db/setup-status';

	import SetupNav from '../SetupNav.svelte';
	import SetupStepTask from './SetupStepTask.svelte';

	export let slug: string;
	export let currentStep = -1;

	let [setupStepId, setupStep] = Object.entries(machines[slug].setupSteps)[currentStep];

	async function setSetupStatusDone() {
		await setDone(slug, setupStepId);
	}
</script>

<SetupNav {slug} {currentStep} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			setup step: <strong>{Object.values(machines[slug].setupSteps)[currentStep].title.toLowerCase()}</strong>
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each Object.entries(setupStep.setupStepTasks) as sst}
			<SetupStepTask {slug} {setupStepId} setupStepTaskId={sst[0]} />
		{/each}
	</div>
	{#if currentStep < Object.values(machines[slug].setupSteps).length - 1}
		<div class="flex flex-col items-center mt-6">
			<a
				on:click={setSetupStatusDone}
				class="p-4 bg-green-600 text-white rounded-md shadow-md"
				href="/machines/{slug}/setup/step/{currentStep + 1}"
				>finish step
			</a>
		</div>
	{:else}
		<div class="flex flex-col items-center mt-6">
			<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{slug}/operation">finish setup </a>
		</div>
	{/if}
</div>
