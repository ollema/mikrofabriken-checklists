<script lang="ts">
	import type { SetupStepType } from '../../../data/types/machines';

	export let setupStep: SetupStepType;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {setupStep.title.toLowerCase()}
</div>
