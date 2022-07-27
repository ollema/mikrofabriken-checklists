<script lang="ts">
	import { machines } from '$lib/data/stores/machines';
	import { Status } from '$lib/data/types/machines';

	export let machineId: string;
	export let stepId: string;

	function colorFromStatus(status: Status): string {
		if (status === Status.Done) {
			return 'green';
		}
		if (status === Status.Skipped) {
			return 'yellow';
		}
		return 'var(--slate-500)';
	}

	$: color = colorFromStatus($machines[machineId].setupSteps[stepId].status.default);
</script>

<a style:color href="/machines/{machineId}/setup/step/{stepId}">█</a>

<style>
	a {
		padding-left: 3px;
	}
</style>
