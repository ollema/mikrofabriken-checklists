<script lang="ts">
	import { Route } from 'tinro';

	import SetupPage from './setup/SetupPage.svelte';

	import MachineNav from './MachineNav.svelte';
	import MachineButton from './MachineButton.svelte';

	import type { MachineType } from '../../models/machine';

	export let currentMachine: MachineType;
</script>

<Route path="/">
	<MachineNav {currentMachine} />

	<div class="default-width-padding mt-16">
		<div class="flex justify-center">
			<h1 class="font-medium text-xl">
				checklists for the <strong>{currentMachine.title.toLowerCase()}</strong> machine
			</h1>
		</div>
		<div class="flex justify-center mt-8 space-x-8">
			<div>
				<MachineButton {currentMachine} action="setup" />
			</div>
			<div>
				<MachineButton {currentMachine} action="operate" />
			</div>
			<div>
				<MachineButton {currentMachine} action="cleanup" />
			</div>
		</div>
	</div>
</Route>

<Route path="/setup/*">
	<SetupPage {currentMachine} />
</Route>
