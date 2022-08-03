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

<div on:click={handleToggle}>
	<slot name="header" />
</div>

{#if open}
	<div transition:slide>
		<slot name="body" />
	</div>
{/if}

<slot />
