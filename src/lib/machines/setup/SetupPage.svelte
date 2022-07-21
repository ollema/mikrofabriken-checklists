<script lang="ts">
	import { Route } from 'tinro';

	import { machines } from '$data/stores/machines';

	import SetupNav from './SetupNav.svelte';
	import SetupStep from './SetupStep.svelte';
	import SetupStepPage from './step/SetupStepPage.svelte';

	export let slug: string;
</script>

<Route path="/">
	<SetupNav {slug} />
	<main>
		<h1>
			the setup for the <strong>{$machines[slug].title.toLowerCase()}</strong> machine consists of the following steps:
		</h1>

		<div class="steps">
			{#each Object.keys($machines[slug].setupSteps) as stepId, i}
				<SetupStep {slug} {stepId} {i} />
			{/each}
		</div>

		<a class="green-button mt-6" href="/machines/{slug}/setup/step/0">let's get started! </a>
	</main>
</Route>

<Route path="/step/:id/*" let:meta>
	<SetupStepPage {slug} currentStep={+meta.params.id} />
</Route>

<style lang="postcss">
	.steps {
		@apply flex flex-col items-center mt-8 space-y-2 w-full;
	}
</style>
