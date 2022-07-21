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

<nav>
	<div>
		{#if currentStep >= 0}
			<div class="navbar-back">
				<a href="/machines/{slug}/setup">back to setup overview</a>
			</div>

			<div class="navbar-title">
				{$machines[slug].title.toLowerCase()} setup
			</div>

			{#if currentStep < Object.values($machines[slug].setupSteps).length - 1}
				<div class="navbar-next">
					<a on:click={setSetupStepDone} href="/machines/{slug}/setup/step/{currentStep + 1}">skip this step</a>
				</div>
			{:else}
				<div class="navbar-next">
					<a on:click={setSetupStepDone} href="/machines/{slug}/operation">finish setup</a>
				</div>
			{/if}
		{:else}
			<div class="navbar-back">
				<a href="/machines/{slug}">back to machine overview</a>
			</div>

			<div class="navbar-title">
				{$machines[slug].title.toLowerCase()} setup
			</div>

			<div class="navbar-next">
				<a href="/machines/{slug}/setup/step/0">start</a>
			</div>
		{/if}
	</div>
</nav>

<nav>
	<div>
		<div class="navbar-user"><a href="/">user: name surname / 1234678</a></div>

		<div class="navbar-progress">
			<div>progress:&nbsp;</div>
			{#each Object.keys($machines[slug].setupSteps) as stepId, i}
				<div class="px-[0.15rem]">
					<!-- TODO: extract color do varible -->
					<a
						href="/machines/{slug}/setup/step/{i}"
						class="text-gray-500"
						class:text-green-500={$machines[slug].setupSteps[stepId].status.default === Status.Done}>█</a
					>
				</div>
			{/each}
		</div>

		<div class="navbar-reset-step">
			<a on:click={resetSetupStep} href="/machines/{slug}/setup/">reset all steps</a>
		</div>
	</div>
</nav>

<style lang="postcss">
	.navbar-back {
		@apply flex-grow basis-0 flex items-center justify-start;
	}

	.navbar-title {
		@apply flex-grow basis-0 flex items-center justify-center;
	}

	.navbar-next {
		@apply flex-grow basis-0 flex items-center justify-end space-x-8;
	}

	.navbar-user {
		@apply flex-grow basis-0 flex items-center justify-start;
	}

	.navbar-progress {
		@apply flex-grow basis-0 flex items-center justify-center;
	}

	.navbar-reset-step {
		@apply flex-grow basis-0 flex items-center justify-end;
	}
</style>
