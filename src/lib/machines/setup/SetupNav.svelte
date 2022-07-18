<script lang="ts">
	import SetupNavProgessBlock from './SetupNavProgessBlock.svelte';

	import { machines } from '../../../data/machines/machines';
	import { setTodo } from '../../../data/db/setup-status';

	export let slug: string;
	export let currentStep = -1;

	function resetSetupStep() {
		Object.keys(machines[slug].setupSteps).forEach((setupStepId) => {
			setTodo(slug, setupStepId);
			slug = slug;
			currentStep = currentStep;
		});
	}
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			{#if currentStep >= 0}
				<div class="flex-grow basis-0 flex justify-start">
					<a href="/machines/{slug}/setup">back to setup overview</a>
				</div>

				<div class="flex-grow basis-0 flex justify-center">
					{machines[slug].title.toLowerCase()} setup
				</div>

				{#if currentStep < Object.values(machines[slug].setupSteps).length - 1}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{slug}/setup/step/{currentStep + 1}">skip this step</a>
					</div>
				{:else}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{slug}/operation">finish setup</a>
					</div>
				{/if}
			{:else}
				<div class="flex-grow basis-0 flex justify-start">
					<a href="/machines/{slug}">back to machine overview</a>
				</div>

				<div class="flex-grow basis-0 flex justify-center">
					{machines[slug].title.toLowerCase()} setup
				</div>

				<div class="flex-grow basis-0 flex justify-end">
					<a class="text-white justify-center" href="/machines/{slug}/setup/step/0">start</a>
				</div>
			{/if}
		</div>
	</div>
</nav>

<nav class="bg-gray-600 text-white mb-4">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			<div class="flex-grow basis-0 flex justify-start"><a href="/users">user: name surname / 1234678</a></div>

			<div class="flex-grow basis-0 flex items-center justify-center">
				<div>progress:&nbsp;</div>
				{#key slug}
					{#each Object.keys(machines[slug].setupSteps) as setupStepId, i}
						<SetupNavProgessBlock {slug} {setupStepId} {i} />
					{/each}
				{/key}
			</div>

			<div class="flex-grow basis-0 flex justify-end">
				<a on:click={resetSetupStep} href="/machines/{slug}/setup/" class="text-white justify-center">reset all steps</a
				>
			</div>
		</div>
	</div>
</nav>
