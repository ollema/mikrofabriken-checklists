<script lang="ts">
	import { page } from '$app/stores';

	import { machines } from '$lib/data/stores/machines';

	$: machineId = $page.params.machineId;
	$: stepId = $page.params.stepId;

	$: currentStep = Object.keys($machines[machineId].setupSteps).indexOf(stepId);
	$: nextStepId = Object.keys($machines[machineId].setupSteps)[currentStep + 1];

	let expanded = false;

	function toggleExpanded() {
		expanded = !expanded;
	}

	function setSetupStepDone() {
		machines.setDone(machineId, stepId);
	}
</script>

<div class="flex justify-center">
	<h1 class="font-medium text-xl">
		step:
		<strong>{$machines[machineId].setupSteps[stepId].title.toLowerCase()}</strong>
	</h1>
</div>
<div class="flex flex-col items-center mt-8 space-y-2">
	{#each Object.keys($machines[machineId].setupSteps[stepId].tasks) as taskId}
		<div class="flex w-full max-w-4xl bg-gray-200 rounded-lg shadow-md p-4">
			<div class="flex items-baseline">
				<input type="checkbox" class="grow-0 shrink-0 w-8 h-8 mr-4" />
			</div>

			<div class="flex-grow">
				<div class="flex items-center justify-between">
					<div class="flex-grow">
						{$machines[machineId].setupSteps[stepId].tasks[taskId].title.toLocaleLowerCase()}
					</div>

					<div>
						<button
							on:click={toggleExpanded}
							type="button"
							class="text-gray-400 flex justify-center border-2 border-gray-300 p-1 rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
					</div>
				</div>

				<div class:hidden={!expanded}>
					<div class="pt-2">bla bla bla</div>
				</div>
			</div>
		</div>
	{/each}
</div>
{#if currentStep < Object.values($machines[machineId].setupSteps).length - 1}
	<div class="flex flex-col items-center mt-6">
		<a
			on:click={setSetupStepDone}
			class="p-4 bg-green-600 text-white rounded-md shadow-md"
			href="/machines/{machineId}/setup/step/{nextStepId}"
			>finish step {currentStep + 1}
		</a>
	</div>
{:else}
	<div class="flex flex-col items-center mt-6">
		<a
			on:click={setSetupStepDone}
			class="p-4 bg-green-600 text-white rounded-md shadow-md"
			href="/machines/{machineId}/operation"
			>finish setup
		</a>
	</div>
{/if}
