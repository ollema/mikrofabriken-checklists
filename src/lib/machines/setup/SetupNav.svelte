<script lang="ts">
	import type { MachineType } from '../../../models/machine';

	export let currentMachine: MachineType;
	export let currentStep = -1;
	currentStep = currentStep;
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			{#if currentStep >= 0}
				<div class="flex-grow basis-0 flex justify-start">
					<a href="/machines/{currentMachine.slug}/setup">back to setup overview</a>
				</div>

				<div class="flex-grow basis-0 flex justify-center">
					{currentMachine.title.toLowerCase()} setup
				</div>

				{#if currentStep < Object.values(currentMachine.setupSteps).length - 1}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{currentMachine.slug}/setup/step/{currentStep + 1}"
							>skip this step</a
						>
					</div>
				{:else}
					<div class="flex-grow basis-0 flex justify-end">
						<a class="text-white justify-center" href="/machines/{currentMachine.slug}/operate">finish setup</a>
					</div>
				{/if}
			{:else}
				<div class="flex-grow basis-0 flex justify-start">
					<a href="/machines/{currentMachine.slug}">back to machine overview</a>
				</div>

				<div class="flex-grow basis-0 flex justify-center">
					{currentMachine.title.toLowerCase()} setup
				</div>

				<div class="flex-grow basis-0 flex justify-end">
					<a class="text-white justify-center" href="/machines/{currentMachine.slug}/setup/step/0">start</a>
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
					{#each Object.values(currentMachine.setupSteps) as step, i}
						<div class="px-[0.15rem]">
							<a class="text-gray-500" class:text-green-500={step} href="/machines/{currentMachine.slug}/setup/step/{i}"
								>█</a
							>
						</div>
					{/each}
					<div>&nbsp;{currentStep + 1}/{Object.values(currentMachine.setupSteps).length}</div>
				</div>
				<div class="flex-grow basis-0 flex justify-end">
					<a class="text-white justify-center" href="/machines/{currentMachine.slug}/setup/reset">reset all steps</a>
				</div>
			{/if}
		</div>
	</div>
</nav>
