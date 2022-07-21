<script lang="ts">
	import { Route } from 'tinro';

	import { machines } from '$data/stores/machines';

	import SetupNav from './SetupNav.svelte';
	import SetupStepCard from './SetupStepCard.svelte';
	import SetupStepPage from './step/SetupStepPage.svelte';

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
			{#each Object.keys($machines[slug].setupSteps) as stepId, i}
				<SetupStepCard {slug} {stepId} {i} />
			{/each}
		</div>
		<div class="flex flex-col items-center mt-6">
			<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{slug}/setup/step/0"
				>let's get started!
			</a>
		</div>
	</div>
</Route>

<Route path="/step/:id/*" let:meta>
	<SetupStepPage {slug} currentStep={+meta.params.id} />
</Route>
