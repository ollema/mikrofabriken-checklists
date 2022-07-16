<script lang="ts">
	import { Route } from 'tinro';

	import CleanupNav from './CleanupNav.svelte';

	export let slug: string;
</script>

<Route path="/">
	<CleanupNav {slug} />

	<div class="default-width-padding mt-8">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">cleanup</h1>
		</div>
	</div>
</Route>
