<script lang="ts">
	import { machines } from '$lib/data/stores/machines';
	import SetupProgressBlock from '$lib/components/SetupProgressBlock.svelte';

	export let section: string;
	export let machineId: string;
	export let action: string;
	export let stepId: string;

	function resetSetup() {
		machines.resetSetup(machineId);
	}

	function resetSetupStep() {
		machines.resetSetupStep(machineId, stepId);
	}
</script>

<nav class="top-nav">
	<div>
		<div class="nav-block left-nav">
			{#if machineId !== undefined}
				{#if action !== undefined}
					{#if stepId !== undefined}
						<a href="/machines/{machineId}/{action}">← back to {action} overview</a>
					{:else}
						<a href="/machines/{machineId}">← back to machine overview</a>
					{/if}
				{:else}
					<a href="/">← back to all machines</a>
				{/if}
			{:else}
				{#each Object.entries($machines) as [machineId, machine]}
					<a href="/machines/{machineId}">{machine.title.toLowerCase()}</a>
				{/each}
			{/if}
		</div>

		<div class="nav-block middle-nav">
			{#if machineId !== undefined}
				{#if action !== undefined}
					{$machines[machineId].title.toLowerCase()}: {action}
				{:else}
					{$machines[machineId].title.toLowerCase()}
				{/if}
			{/if}
		</div>

		<div class="nav-block right-nav">
			{#if machineId !== undefined}
				<a href="/machines/{machineId}/setup" class:inactive={action !== 'setup'}>setup</a>
				<a href="/machines/{machineId}/operate" class:inactive={action !== 'operate'}>operate</a>
				<a href="/machines/{machineId}/cleanup" class:inactive={action !== 'cleanup'}>cleanup</a>
			{:else}
				<a href="/about" class:selected={section === 'about'}>about</a>
			{/if}
		</div>

		<div class="nav-block left-nav">
			<a href="/">user: username / rfid tag </a>
		</div>

		<div class="nav-block middle-nav">
			{#if machineId !== undefined}
				{#if action !== undefined && action === 'setup'}
					<div>progress:&nbsp;</div>
					{#each Object.keys($machines[machineId].setupSteps) as stepId}
						<SetupProgressBlock {machineId} {stepId} />
					{/each}
				{/if}
			{/if}
		</div>

		<div class="nav-block right-nav">
			{#if machineId !== undefined}
				{#if action !== undefined && action === 'setup'}
					{#if stepId !== undefined}
						<a on:click={resetSetupStep} href="/machines/{machineId}/setup/step/{stepId}">reset step</a>
					{:else}
						<a on:click={resetSetup} href="/machines/{machineId}/setup">reset setup</a>
					{/if}
				{:else}
					<a on:click={resetSetup} href="/machines/{machineId}">reset machine</a>
				{/if}
			{/if}
		</div>
	</div>
</nav>

<style>
	nav {
		background: linear-gradient(180deg, var(--slate-800) 50%, var(--slate-700) 50%);
		color: var(--slate-100);
	}

	.inactive {
		color: var(--slate-400);
	}

	a:hover {
		color: var(--slate-100);
		text-decoration: underline;
	}

	nav > div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 2rem);
		justify-content: space-between;

		max-width: 70rem;
		margin: 0 auto;
	}

	.nav-block {
		display: flex;
		align-items: center;
	}

	.nav-block > * + * {
		margin-left: 2rem;
	}

	.left-nav {
		justify-content: left;
	}

	.middle-nav {
		justify-content: center;
	}

	.right-nav {
		justify-content: right;
	}
</style>
