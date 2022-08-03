<script lang="ts">
	import { machines } from '$lib/data/stores/machines';

	export let machineId: string;
	export let stepId: string;
	export let taskId: string;
</script>

<div class="task">
	<div class="task-header">
		{$machines[machineId].setupSteps[stepId].tasks[taskId].title.toLocaleLowerCase()}
	</div>

	<div class="task-body">
		<p>
			{#if $machines[machineId].setupSteps[stepId].tasks[taskId].desc !== undefined}
				bla bla
			{:else}
				-
			{/if}
		</p>
		<button type="button">skip task</button>
	</div>
</div>

<style>
	.task {
		padding: 0.5rem 1rem;

		background-color: var(--slate-200);
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.task-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.task-body {
		padding-top: 0.5rem;
	}
</style>
