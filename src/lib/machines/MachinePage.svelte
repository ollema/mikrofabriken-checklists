<script lang="ts">
	import { Route } from 'tinro';

	import { machines } from '$data/stores/machines';

	import MachineNav from './MachineNav.svelte';
	import MachineButton from './MachineButton.svelte';

	import SetupPage from './setup/SetupPage.svelte';
	import CleanupPage from './cleanup/CleanupPage.svelte';
	import OperationPage from './operate/OperationPage.svelte';

	export let slug: string;
</script>

<Route path="/">
	<MachineNav {slug} />
	<main>
		<h1>
			checklists for the <strong>{$machines[slug].title.toLowerCase()}</strong> machine
		</h1>

		<div class="buttons">
			<div>
				<MachineButton {slug} action="setup" />
			</div>
			<div>
				<MachineButton {slug} action="operation" />
			</div>
			<div>
				<MachineButton {slug} action="cleanup" />
			</div>
		</div>
	</main>
</Route>

<Route path="/setup/*">
	<SetupPage {slug} />
</Route>

<Route path="/operation/*">
	<OperationPage {slug} />
</Route>

<Route path="/cleanup/*">
	<CleanupPage {slug} />
</Route>

<style lang="postcss">
	.buttons {
		@apply flex items-center justify-center mt-8 space-x-8;
	}
</style>
