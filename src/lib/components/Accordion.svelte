<script lang="ts">
	import { onDestroy } from 'svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let key: string | null = null;

	// create a store for the children to access
	const store = writable(key);

	// when the store changes, update the key prop
	const unsubscribe = store.subscribe((s) => {
		key = s;
	});

	// when the key prop changes, update the store
	$: store.update((s) => (s = key));

	// make the store available to children
	setContext('svelte-collapsible-accordion', store);

	onDestroy(unsubscribe);
</script>

<slot />
