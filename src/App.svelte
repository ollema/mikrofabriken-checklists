<script lang="ts">
	import { Route } from 'tinro';

	import BaseNav from './lib/BaseNav.svelte';
	import MachinePage from './lib/machines/MachinePage.svelte';

	import { machines } from './util/stores';

	import { appWindow } from '@tauri-apps/api/window';

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

{#each Object.values($machines) as machine}
	<Route path="/machines/{machine.slug}/*">
		<MachinePage slug={machine.slug} />
	</Route>
{/each}
