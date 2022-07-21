<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
	import { Route } from 'tinro';

	import { machines } from '$data/stores/machines';

	import BaseNav from '$lib/BaseNav.svelte';
	import MachinePage from '$lib/machines/MachinePage.svelte';

	// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
	document.getElementById('titlebar-minimize')!.addEventListener('click', () => appWindow.minimize());
	// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
	document.getElementById('titlebar-maximize')!.addEventListener('click', () => appWindow.toggleMaximize());
	// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
	document.getElementById('titlebar-close')!.addEventListener('click', () => appWindow.close());
</script>

<Route path="/">
	<BaseNav />
	<div class="default-width-padding">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">mikrofabriken checklists</h1>
		</div>
	</div>
</Route>

{#each Object.keys($machines) as slug}
	<Route path="/machines/{slug}/*">
		<MachinePage {slug} />
	</Route>
{/each}
