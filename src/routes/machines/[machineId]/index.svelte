<script lang="ts">
	import { page } from '$app/stores';

	import { machines } from '$lib/data/stores/machines';

	import Button from './_Button.svelte';

	$: machineId = $page.params.machineId;
</script>

<h1>
	checklists for the <strong>{$machines[machineId].title.toLowerCase()}</strong> machine
</h1>

<div class="buttons">
	<div>
		<Button {machineId} action="setup" />
	</div>
	<div>
		<Button {machineId} action="operation" />
	</div>
	<div>
		<Button {machineId} action="cleanup" />
	</div>
</div>

<style>
	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;

		margin-top: 2rem;
	}

	.buttons > * + * {
		margin-left: 2rem;
	}
</style>
