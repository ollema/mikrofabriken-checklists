<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import ToggleConfetti from '$lib/components/ToggleConfetti.svelte';

	import { Confetti } from 'svelte-confetti';

	import { page } from '$app/stores';

	import { machines } from '$lib/data/stores/machines';

	$: machineId = $page.params.machineId;
	$: stepId = $page.params.stepId;

	$: currentStep = Object.keys($machines[machineId].setupSteps).indexOf(stepId);
	$: nextStepId = Object.keys($machines[machineId].setupSteps)[currentStep + 1];

	function setSetupStepDone() {
		machines.setDone(machineId, stepId);
	}
</script>

<h1>
	setup step {currentStep + 1}: <strong>{$machines[machineId].setupSteps[stepId].title.toLowerCase()}</strong>
</h1>

<Accordion>
	<div class="tasks">
		{#each Object.keys($machines[machineId].setupSteps[stepId].tasks) as taskId}
			<div class="task">
				<AccordionItem key={taskId}>
					<div slot="header-title">
						{$machines[machineId].setupSteps[stepId].tasks[taskId].title.toLocaleLowerCase()}
					</div>

					<div slot="body">
						<p>
							{#if $machines[machineId].setupSteps[stepId].tasks[taskId].desc !== undefined}
								bla bla
							{:else}
								-
							{/if}
						</p>
					</div>

					<div slot="footer">
						<div class="footer">
							<div>
								status: {$machines[machineId].setupSteps[stepId].tasks[taskId].status.default.toLowerCase()}
							</div>

							<div class="footer-buttons">
								<button class="button reset-button" type="button">reset</button>
								<button class="button skip-button" type="button">skip</button>
								<ToggleConfetti>
									<button slot="content" class="button done-button" type="button">done</button>
									<Confetti />
								</ToggleConfetti>
							</div>
						</div>
					</div>
				</AccordionItem>
			</div>
		{/each}
	</div>
</Accordion>

{#if currentStep < Object.values($machines[machineId].setupSteps).length - 1}
	<a on:click={setSetupStepDone} class="button finish-button" href="/machines/{machineId}/setup/step/{nextStepId}">
		finish setup step {currentStep + 1}
	</a>
{:else}
	<a on:click={setSetupStepDone} class="finish-button" href="/machines/{machineId}/operation"> finish setup </a>
{/if}

<style>
	.tasks {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 1rem;
		width: 100%;
	}

	.tasks > * + * {
		margin-top: 0.75rem;
	}

	.task {
		width: 100%;
		max-width: 50rem;
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer-buttons {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;

		padding: 0.4rem 0.75rem;
		margin: -0.25rem 0.25rem;

		color: var(--slate-600);
		background-color: var(--slate-300);
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.button:hover {
		color: var(--slate-800);
		background-color: var(--slate-400);
	}

	.done-button {
		margin-right: 0;
	}

	.finish-button {
		display: flex;
		align-items: center;

		margin-top: 1rem;
		padding: 0.75rem;

		color: var(--slate-100);
		background-color: green;
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>
