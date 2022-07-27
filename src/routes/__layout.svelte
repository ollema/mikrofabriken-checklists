<script lang="ts">
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	$: section = $page.url.pathname.split('/')[1];
	$: machineId = $page.url.pathname.split('/')[2];
	$: action = $page.url.pathname.split('/')[3];
	$: stepId = $page.url.pathname.split('/')[5];
</script>

<Nav {section} {machineId} {action} {stepId} />

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		max-width: 70rem;
		padding: 2rem 0;
		margin: 0 auto;
	}
</style>
