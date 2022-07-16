<script lang="ts">
	import { Route } from 'tinro';

	import BaseNav from './lib/BaseNav.svelte';
	import MachinePage from './lib/machines/MachinePage.svelte';

	import { machines } from './data/machines';
</script>

<Route path="/">
	<BaseNav />
	<div class="default-width-padding">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">mikrofabriken checklists</h1>
		</div>
	</div>
</Route>

<Route path="/machines/:slug/*" let:meta>
	<MachinePage currentMachine={machines[meta.params.slug]} />
</Route>
