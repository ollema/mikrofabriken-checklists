<script lang="ts">
	import { Route } from 'tinro';

	import BaseNav from './lib/BaseNav.svelte';
	import MachinePage from './lib/machines/MachinePage.svelte';

	import { machines } from './util/stores';
</script>

<Route path="/">
	<BaseNav />
	<div class="default-width-padding">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">mikrofabriken checklists</h1>
		</div>
	</div>
</Route>

{#each $machines as machine}
	<Route path="/machines/{machine.slug}/*">
		<MachinePage slug={machine.slug} />
	</Route>
{/each}
