<script lang="ts">
	import SetupNav from '../SetupNav.svelte';
	import SetupStepTask from './SetupStepTask.svelte';

	import { machines } from './../../../../util/stores';
	import { settings } from './../../../../util/stores';

	export let slug: string;
	export let currentStep = -1;

	$: id = Object.values($machines[slug].setupSteps)[currentStep].id;

	function setDone() {
		$settings.machineSettings[slug].setupStepSettings[id].done = true;
		$settings.machineSettings[slug].setupStepSettings[id].skipped = false;
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
			<SetupStepTask {setupStepTask} {i} />
		{/each}
	</div>
	<div class="flex flex-col items-center mt-6">
		<a
			on:click={setDone}
			class="p-4 bg-green-600 text-white rounded-md shadow-md"
			href="/machines/{slug}/setup/step/{currentStep + 1}"
			>finish step
		</a>
	</div>
</div>
