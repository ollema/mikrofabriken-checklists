<script lang="ts">
	import type { MachineType } from '../models/machine';

	export let machines: { [key: string]: MachineType };
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white mb-8">
	<div class="default-width-padding">
		<div class="flex items-center justify-start h-8">
			<div class="flex items-center justify-between space-x-8">
				{#each Object.values(machines) as machine}
					<div>
						<a href="/machines/{machine.slug}">{machine.title.toLowerCase()}</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</nav>
