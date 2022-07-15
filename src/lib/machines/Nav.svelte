<script lang="ts">
	import type { MachineType } from '../../models/machine';

	export let currentMachine: MachineType;
</script>

<nav class="bg-gray-800 text-white">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-10">
			<div class="flex-grow basis-0 flex justify-start">
				<a href="/">back to all machines</a>
			</div>
			<div class="flex-grow basis-0 flex justify-center">
				{currentMachine.title.toLowerCase()}
			</div>
			<div class="flex-grow basis-0 flex justify-end space-x-8">
				<div>
					<a href="/machines/{currentMachine.slug}/setup">setup</a>
				</div>
				<div>
					<a href="/machines/{currentMachine.slug}/operate">operate</a>
				</div>
				<div>
					<a href="/machines/{currentMachine.slug}/cleanup">cleanup</a>
				</div>
			</div>
		</div>
	</div>
</nav>

<nav class="bg-gray-600 text-white mb-4">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-10">
			<div class="flex-grow basis-0 flex justify-start"><a href="/">user: name surname / 1234678</a></div>
			<div class="flex-grow basis-0 flex justify-end"><a href="/">reset machine</a></div>
		</div>
	</div>
</nav>
