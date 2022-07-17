<script lang="ts">
	import { machines } from './../../../../util/stores';

	export let slug: string;
	export let currentStep = -1;
	export let setupStepId: number;
	export let setupStepTaskId: number;

	let expanded = false;

	function toggleExpanded() {
		expanded = !expanded;
	}
</script>

<div class="flex w-full max-w-4xl bg-gray-200 rounded-lg shadow-md p-4">
	<div class="flex items-baseline">
		<input
			type="checkbox"
			class="grow-0 shrink-0 w-8 h-8 mr-4"
			checked={$machines[slug].setupSteps[setupStepId].setupStepTasks[setupStepTaskId].done}
		/>
	</div>

	<div class="flex-grow">
		<div class="flex items-center justify-between">
			<div class="flex-grow">
				{currentStep + 1}: {$machines[slug].setupSteps[setupStepId].setupStepTasks[
					setupStepTaskId
				].title.toLocaleLowerCase()}
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
