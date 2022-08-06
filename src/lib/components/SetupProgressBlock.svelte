<script lang="ts">
	import { machines } from '$lib/data/stores/machines';

	export let machineId: string;
	export let stepId: string;
</script>

<a class:done={$machines[machineId].setupSteps[stepId].done.default} href="/machines/{machineId}/setup/step/{stepId}">
	█
</a>

<style>
	a {
		padding-left: 3px;

		color: var(--slate-400);
	}

	.done {
		color: green;
	}
</style>
