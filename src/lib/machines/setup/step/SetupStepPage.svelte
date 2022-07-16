<script lang="ts">
	import SetupNav from '../SetupNav.svelte';
	import type { MachineType } from '../../../../models/machine';
	import SetupStepTask from './SetupStepTask.svelte';

	export let currentMachine: MachineType;
	export let currentStep: number;
</script>

<SetupNav {currentMachine} {currentStep} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			setup step: <strong>{currentMachine.setupSteps[currentStep].title.toLowerCase()}</strong>
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each currentMachine.setupSteps[currentStep].setupStepTasks as setupStepTask, i}
			<SetupStepTask {setupStepTask} {i} />
		{/each}
	</div>
	<div class="flex flex-col items-center mt-6">
		<a
			class="p-4 bg-green-600 text-white rounded-md shadow-md"
			href="/machines/{currentMachine.slug}/setup/step/{currentStep + 1}"
			>finish step
		</a>
	</div>
</div>
