<script lang="ts">
	import { Route } from 'tinro';

	import SetupStepPage from './step/SetupStepPage.svelte';

	import SetupNav from './SetupNav.svelte';
	import SetupStepCard from './SetupStepCard.svelte';

	import { machines } from './../../../util/stores';

	export let slug: string;
</script>

<Route path="/">
	<SetupNav {slug} />

	<div class="default-width-padding mt-8">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">
				the setup for the <strong>{$machines[slug].title.toLowerCase()}</strong> machine consists of the following steps:
			</h1>
		</div>
		<div class="flex flex-col items-center mt-8 space-y-2">
			{#each Object.values($machines[slug].setupSteps) as setupStep, i}
				<SetupStepCard {setupStep} {i} />
			{/each}
		</div>
		<div class="flex flex-col items-center mt-6">
			<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{$machines[slug].slug}/setup/step/0"
				>let's get started!
			</a>
		</div>
	</div>
</Route>

<Route path="/step/:id/*" let:meta>
	<SetupStepPage {slug} currentStep={+meta.params.id} />
</Route>
