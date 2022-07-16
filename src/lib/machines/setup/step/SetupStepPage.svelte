<script lang="ts">
	import SetupNav from '../SetupNav.svelte';
	import SetupStepTask from './SetupStepTask.svelte';

	import type { MachineType } from 'src/models/machine';

	import { machines } from './../../../../util/stores';

	export let slug: string;

	$: currentMachine = <MachineType>Object.values($machines).find((obj) => {
		return obj.slug === slug;
	});

	export let currentStep = -1;

	import { setSetupStepDone } from '../../../../util/settings';

	async function setDone() {
		currentMachine.setupSteps[currentStep].done = true;
		$machines[0] = currentMachine;
	}
</script>

<SetupNav {slug} {currentStep} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			setup step: <strong>{Object.values(currentMachine.setupSteps)[currentStep].title.toLowerCase()}</strong>
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each Object.values(Object.values(currentMachine.setupSteps)[currentStep].setupStepTasks) as setupStepTask, i}
			<SetupStepTask {setupStepTask} {i} />
		{/each}
	</div>
	<div class="flex flex-col items-center mt-6">
		<a
			on:click={setDone}
			class="p-4 bg-green-600 text-white rounded-md shadow-md"
			href="/machines/{currentMachine.slug}/setup/step/{currentStep + 1}"
			>finish step
		</a>
	</div>
</div>
