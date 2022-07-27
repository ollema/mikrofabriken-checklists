<script lang="ts">
	import { machines } from '$lib/data/stores/machines';

	export let section: string | undefined;
	export let machineId: string | undefined;
	export let action: string | undefined;
	export let stepId: string | undefined;
</script>

<nav class="top-nav">
	<div>
		<div class="left-nav">
			{#if machineId !== undefined && Object.hasOwn($machines, machineId)}
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

		<div class="middle-nav">
			{#if machineId !== undefined && Object.hasOwn($machines, machineId)}
				{#if action !== undefined}
					{$machines[machineId].title.toLowerCase()}: {action}
				{:else}
					{$machines[machineId].title.toLowerCase()}
				{/if}
			{/if}
		</div>

		<div class="right-nav">
			<a href="/about" class:selected={section === 'about'}>about</a>
		</div>

		<div class="left-nav">
			<a href="/">user: username / rfid tag </a>
		</div>

		<div class="middle-nav">
			<a href="/">...</a>
		</div>

		<div class="right-nav">
			<a href="/">...</a>
		</div>
	</div>
</nav>

<style>
	nav {
		background: linear-gradient(180deg, var(--slate-800) 50%, var(--slate-700) 50%);
		color: var(--slate-300);
	}

	a:hover {
		color: var(--slate-50);
	}

	nav > div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 2rem);
		justify-content: space-between;

		max-width: 80rem;
		margin: 0 auto;
	}

	.left-nav {
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.middle-nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-nav {
		display: flex;
		align-items: center;
		justify-content: right;
	}
</style>
