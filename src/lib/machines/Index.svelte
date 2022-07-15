<script lang="ts">
	import { Route } from 'tinro';

	import Setup from './setup/Index.svelte';

	import Nav from './Nav.svelte';
	import MachineButton from './MachineButton.svelte';

	import type { MachineType } from '../../models/machine';

	export let currentMachine: MachineType;
</script>

<Route path="/machines/:slug" let:meta>
	<Setup {currentMachine} />
</Route>

<Nav {currentMachine} />

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
