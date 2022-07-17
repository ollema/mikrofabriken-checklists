<script lang="ts">
	import SetupNav from '../SetupNav.svelte';
	import SetupStepTask from './SetupStepTask.svelte';

	import { machines } from './../../../../util/stores';
	import { setSetupStepDone } from './../../../../util/stores';

	export let slug: string;
	export let currentStep = -1;

	$: setupStepId = Object.values($machines[slug].setupSteps)[currentStep].id;

	function setDone() {
		setSetupStepDone(slug, setupStepId);
	}
</script>

<SetupNav {slug} {currentStep} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			setup step: <strong>{Object.values($machines[slug].setupSteps)[currentStep].title.toLowerCase()}</strong>
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each Object.values(Object.values($machines[slug].setupSteps)[currentStep].setupStepTasks) as setupStepTask, i}
			<SetupStepTask {slug} {currentStep} {setupStepId} setupStepTaskId={setupStepTask.id} />
		{/each}
	</div>
	{#if currentStep < Object.values($machines[slug].setupSteps).length - 1}
		<div class="flex flex-col items-center mt-6">
			<a
				on:click={setDone}
				class="p-4 bg-green-600 text-white rounded-md shadow-md"
				href="/machines/{slug}/setup/step/{currentStep + 1}"
				>finish step
			</a>
		</div>
	{:else}
		<div class="flex flex-col items-center mt-6">
			<a on:click={setDone} class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{slug}/operation"
				>finish step
			</a>
		</div>
	{/if}
</div>
