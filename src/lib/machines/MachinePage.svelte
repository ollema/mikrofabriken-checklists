<script lang="ts">
	import { Route } from 'tinro';

	import SetupPage from './setup/SetupPage.svelte';

	import MachineNav from './MachineNav.svelte';
	import MachineButton from './MachineButton.svelte';

	import type { MachineType } from 'src/models/machine';

	import { machines } from './../../util/stores';

	export let slug: string;

	$: currentMachine = <MachineType>Object.values($machines).find((obj) => {
		return obj.slug === slug;
	});
</script>

<Route path="/">
	<MachineNav {slug} />

	<div class="default-width-padding mt-16">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">
				checklists for the <strong>{currentMachine.title.toLowerCase()}</strong> machine
			</h1>
		</div>
		<div class="flex justify-center mt-8 space-x-8">
			<div>
				<MachineButton {slug} action="setup" />
			</div>
			<div>
				<MachineButton {slug} action="operate" />
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
