<script lang="ts">
	import { machines } from './../../util/stores';

	export let slug: string;
</script>

<nav data-tauri-drag-region class="bg-gray-800 text-white">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			<div class="flex-grow basis-0 flex justify-start">
				<a href="/">back to all machines</a>
			</div>
			<div class="flex-grow basis-0 flex justify-center">
				{$machines[slug].title.toLowerCase()}
			</div>
			<div class="flex-grow basis-0 flex justify-end space-x-8">
				<div>
					<a href="/machines/{slug}/setup">setup</a>
				</div>
				<div>
					<a href="/machines/{slug}/operate">operate</a>
				</div>
				<div>
					<a href="/machines/{slug}/cleanup">cleanup</a>
				</div>
			</div>
		</div>
	</div>
</nav>

<nav class="bg-gray-600 text-white mb-4">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-8">
			<div class="flex-grow basis-0 flex justify-start"><a href="/">user: name surname / 1234678</a></div>
			<div class="flex-grow basis-0 flex justify-end"><a href="/">reset machine</a></div>
		</div>
	</div>
</nav>
