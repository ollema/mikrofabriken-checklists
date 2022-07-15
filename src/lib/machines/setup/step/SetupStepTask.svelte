<script lang="ts">
	import type { SetupStepTasks } from '../../../../models/machine';

	export let setupStepTask: SetupStepTasks;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {setupStepTask.title.toLowerCase()}
</div>
