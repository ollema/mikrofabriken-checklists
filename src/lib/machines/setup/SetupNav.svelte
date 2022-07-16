<script lang="ts">
	import { machines } from './../../../util/stores';
	import { settings } from './../../../util/stores';

	export let slug: string;
	export let currentStep = -1;

	function resetAllSteps() {
		Object.keys($settings.machineSettings[slug].setupStepSettings).forEach((id) => {
			$settings.machineSettings[slug].setupStepSettings[+id].done = false;
			$settings.machineSettings[slug].setupStepSettings[+id].skipped = false;
			$settings.machineSettings[slug].setupStepSettings[+id].setupStepTaskSettings = {};
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
					{$machines[slug].title.toLowerCase()} setup
				</div>

				{#if currentStep < Object.values($machines[slug].setupSteps).length - 1}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{slug}/setup/step/{currentStep + 1}">skip this step</a>
					</div>
				{:else}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{slug}/operate">finish setup</a>
					</div>
				{/if}
			{:else}
				<div class="flex-grow basis-0 flex justify-start">
					<a href="/machines/{slug}">back to machine overview</a>
				</div>

				<div class="flex-grow basis-0 flex justify-center">
					{$machines[slug].title.toLowerCase()} setup
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

			{#if currentStep >= 0}
				<div class="flex-grow basis-0 flex items-center justify-center">
					<div>progress:&nbsp;</div>
					{#each Object.values($machines[slug].setupSteps) as setupStep, i}
						<div class="px-[0.15rem]">
							<a class="text-gray-500" class:text-green-500={setupStep.done} href="/machines/{slug}/setup/step/{i}">█</a
							>
						</div>
					{/each}
					<div>&nbsp;{currentStep + 1}/{Object.values($machines[slug].setupSteps).length}</div>
				</div>
				<div class="flex-grow basis-0 flex justify-end">
					<a on:click={resetAllSteps} href="/machines/{slug}/setup/step/{0}" class="text-white justify-center"
						>reset all steps</a
					>
				</div>
			{/if}
		</div>
	</div>
</nav>
