<script lang="ts">
	import { isDone } from '../../../data/db/setup-status';

	export let slug: string;
	export let setupStepId: string;
	export let i: number;
</script>

{#key slug}
	{#await isDone(slug, setupStepId) then done}
		<div class="px-[0.15rem]">
			<a href="/machines/{slug}/setup/step/{i}" class="text-gray-500" class:text-green-500={done}>█</a>
		</div>
	{/await}
{/key}
