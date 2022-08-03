<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { Writable } from 'svelte/store';

	export let key: string;

	const store: Writable<string | null> = getContext('svelte-collapsible-accordion');

	$: open = $store === key;

	function handleToggle() {
		if (open) {
			store.update((s) => (s = null));
		} else {
			store.update((s) => (s = key));
		}
	}
</script>

<div class="item">
	<div class="header" on:click={handleToggle}>
		<div class="title">
			<slot name="header-title" />
		</div>
		<svg
			class:open
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</div>

	{#if open}
		<div class="body" transition:slide>
			<slot name="body" />
		</div>
	{/if}

	<div class="footer">
		<slot name="footer" />
	</div>
</div>

<style>
	.item {
		background-color: var(--slate-200);
		border: 0rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.item > * {
		padding: 0.6rem;
	}

	.item > *:not(:last-child) {
		border-bottom: 2px solid var(--slate-300);
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;
	}

	.header:hover {
		text-decoration: underline;
	}

	svg {
		height: 1.5rem;
		width: 1.5rem;
		margin-top: 0.1rem;

		transition: transform 500ms ease-out;
	}

	.open {
		transform: rotateX(180deg);
	}
</style>
