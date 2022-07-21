<script lang="ts">
	import { machines } from '$data/stores/machines';

	export let slug: string;
</script>

<nav>
	<div>
		<div class="flex-grow basis-0 flex justify-start">
			<a href="/machines/{slug}">back to machine overview</a>
		</div>

		<div class="flex-grow basis-0 flex justify-center">
			{$machines[slug].title.toLowerCase()} cleanup
		</div>

		<div class="flex-grow basis-0 flex justify-end" />
	</div>
</nav>

<nav>
	<div>
		<div class="flex-grow basis-0 flex justify-start"><a href="/users">user: name surname / 1234678</a></div>
	</div>
</nav>
