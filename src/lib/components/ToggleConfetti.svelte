<script>
	import { tick } from 'svelte';

	let active = false;

	async function click() {
		active = false;
		await tick();
		active = true;
	}
</script>

<span on:click={click} class="relative">
	<slot name="content" />

	{#if active}
		<div class="confetti">
			<slot />
		</div>
	{/if}
</span>

<style>
	.relative {
		position: relative;
	}

	.relative .confetti {
		position: absolute;
		top: 50%;
		left: 50%;
	}

	.confetti {
		pointer-events: none;
	}
</style>
