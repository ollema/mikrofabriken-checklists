<script lang="ts">
	import { Route } from 'tinro';

	import SetupStepPage from './step/SetupStepPage.svelte';

	import SetupNav from './SetupNav.svelte';
	import SetupStep from './SetupStepCard.svelte';

	import type { MachineType } from '../../../models/machine';

	export let currentMachine: MachineType;
</script>

<Route path="/">
	<SetupNav {currentMachine} />

	<div class="default-width-padding mt-8">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">
				the setup for the <strong>{currentMachine.title.toLowerCase()}</strong> machine consists of the following steps:
			</h1>
		</div>
		<div class="flex flex-col items-center mt-8 space-y-2">
			{#each currentMachine.setupSteps as setupStep, i}
				<SetupStep {setupStep} {i} />
			{/each}
		</div>
		<div class="flex flex-col items-center mt-6">
			<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{currentMachine.slug}/setup/step/0"
				>let's get started!
			</a>
		</div>
	</div>
</Route>

<Route path="/step/:id/*" let:meta>
	<SetupStepPage {currentMachine} currentStep={+meta.params.id} />
</Route>
