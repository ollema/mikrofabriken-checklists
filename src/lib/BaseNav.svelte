<script lang="ts">
	import { machines } from '$data/stores/machines';
</script>

<nav>
	<div>
		<div class="navbar-machines">
			{#each Object.entries($machines) as [slug, machine]}
				<div>
					<a href="/machines/{slug}">{machine.title.toLowerCase()}</a>
				</div>
			{/each}
		</div>

		<div>about</div>
	</div>
</nav>

<style lang="postcss">
	.navbar-machines {
		@apply flex items-center justify-between space-x-8;
	}
</style>
