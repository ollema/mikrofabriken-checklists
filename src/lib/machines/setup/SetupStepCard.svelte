<script lang="ts">
	import { machines } from '$data/stores/machines';

	export let slug: string;
	export let stepId: string;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {$machines[slug].setupSteps[stepId].title.toLowerCase()}
</div>
