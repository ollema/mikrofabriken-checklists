<script lang="ts">
	import type { SetupStep } from '../../../models/machine';

	export let setupStep: SetupStep;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {setupStep.title.toLowerCase()}
</div>
