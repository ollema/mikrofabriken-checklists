<script lang="ts">
	import { machines } from '../../../data/machines/machines';

	export let slug: string;
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			<div class="flex-grow basis-0 flex justify-start">
				<a href="/machines/{slug}">back to machine overview</a>
			</div>

			<div class="flex-grow basis-0 flex justify-center">
				{machines[slug].title.toLowerCase()} cleanup
			</div>

			<div class="flex-grow basis-0 flex justify-end" />
		</div>
	</div>
</nav>

<nav class="bg-gray-600 text-white mb-4">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			<div class="flex-grow basis-0 flex justify-start"><a href="/users">user: name surname / 1234678</a></div>
		</div>
	</div>
</nav>
