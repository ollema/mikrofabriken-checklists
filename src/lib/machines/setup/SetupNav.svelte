<script lang="ts">
	import { machines } from '$data/stores/machines';
	import { Status } from '$data/types/machines';

	export let slug: string;
	export let currentStep = -1;

	$: stepId = Object.keys($machines[slug].setupSteps)[currentStep];

	function setSetupStepDone() {
		machines.setDone(slug, stepId);
	}

	function resetSetupStep() {
		Object.keys($machines[slug].setupSteps).forEach((stepId) => {
			machines.setTodo(slug, stepId);
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
						<a
							on:click={setSetupStepDone}
							class="text-white justify-center"
							href="/machines/{slug}/setup/step/{currentStep + 1}">skip this step</a
						>
					</div>
				{:else}
					<div class="flex-grow basis-0 flex justify-end">
						<a on:click={setSetupStepDone} class="text-white justify-center" href="/machines/{slug}/operation"
							>finish setup</a
						>
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

			<div class="flex-grow basis-0 flex items-center justify-center">
				<div>progress:&nbsp;</div>
				{#each Object.keys($machines[slug].setupSteps) as stepId, i}
					<div class="px-[0.15rem]">
						<a
							href="/machines/{slug}/setup/step/{i}"
							class="text-gray-500"
							class:text-green-500={$machines[slug].setupSteps[stepId].status.default === Status.Done}>█</a
						>
					</div>
				{/each}
			</div>

			<div class="flex-grow basis-0 flex justify-end">
				<a on:click={resetSetupStep} href="/machines/{slug}/setup/" class="text-white justify-center">reset all steps</a
				>
			</div>
		</div>
	</div>
</nav>
