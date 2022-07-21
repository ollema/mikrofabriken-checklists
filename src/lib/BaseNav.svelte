<script lang="ts">
	import { machines } from '$data/stores/machines';
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white mb-8">
	<div class="default-width-padding">
		<div class="flex items-center justify-start h-8">
			<div class="flex items-center justify-between space-x-8">
				{#each Object.entries($machines) as [slug, machine]}
					<div>
						<a href="/machines/{slug}">{machine.title.toLowerCase()}</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</nav>
