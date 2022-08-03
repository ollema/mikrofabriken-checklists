<script lang="ts">
	import { machines } from '$lib/data/stores/machines';
	import { Status } from '$lib/data/types/machines';

	export let i: number;
	export let machineId: string;
	export let stepId: string;

	function colorFromStatus(status: Status): string {
		if (status === Status.Done) {
			return 'var(--slate-400)';
		}
		if (status === Status.Skipped) {
			return 'var(--slate-400)';
		}
		return 'inherit';
	}

	$: status = $machines[machineId].setupSteps[stepId].status.default;
	$: color = colorFromStatus(status);
</script>

<a style:color href="/machines/{machineId}/setup/step/{stepId}" class="step">
	<div>{i + 1}: {$machines[machineId].setupSteps[stepId].title.toLowerCase()}</div>
	<div>{status.toLowerCase()}</div>
</a>

<style>
	.step {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0.5rem 1rem;

		background-color: var(--slate-200);
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>
