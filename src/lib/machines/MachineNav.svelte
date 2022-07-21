<script lang="ts">
	import { machines } from '$data/stores/machines';

	export let slug: string;
</script>

<nav>
	<div>
		<div class="navbar-back">
			<a href="/">back to all machines</a>
		</div>

		<div class="navbar-title">
			{$machines[slug].title.toLowerCase()}
		</div>

		<div class="navbar-actions">
			<div>
				<a href="/machines/{slug}/setup">setup</a>
			</div>
			<div>
				<a href="/machines/{slug}/operation">operation</a>
			</div>
			<div>
				<a href="/machines/{slug}/cleanup">cleanup</a>
			</div>
		</div>
	</div>
</nav>

<nav>
	<div>
		<div class="navbar-user"><a href="/">user: name surname / 1234678</a></div>

		<div class="navbar-reset-machine"><a href="/">reset machine</a></div>
	</div>
</nav>

<style lang="postcss">
	.navbar-back {
		@apply flex-grow basis-0 flex items-center justify-start;
	}

	.navbar-title {
		@apply flex-grow basis-0 flex items-center justify-center;
	}

	.navbar-actions {
		@apply flex-grow basis-0 flex items-center justify-end space-x-8;
	}

	.navbar-user {
		@apply flex-grow basis-0 flex items-center justify-start;
	}

	.navbar-reset-machine {
		@apply flex-grow basis-0 flex items-center justify-end;
	}
</style>
