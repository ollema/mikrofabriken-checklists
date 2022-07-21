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

	<div class="default-width-padding mt-16">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">
				checklists for the <strong>{$machines[slug].title.toLowerCase()}</strong> machine
			</h1>
		</div>
		<div class="flex justify-center mt-8 space-x-8">
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
	</div>
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
