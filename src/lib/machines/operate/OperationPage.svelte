<script lang="ts">
	import { Route } from 'tinro';

	import OperationNav from './OperationNav.svelte';

	export let slug: string;
</script>

<Route path="/">
	<OperationNav {slug} />

	<div class="default-width-padding mt-8">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">operation</h1>
		</div>
	</div>
</Route>
