<script lang="ts">
	import svelteLogo from './assets/svelte.svg';
	import Counter from './lib/Counter.svelte';

	import { getAllUsers } from './utils/database';

	let usersPromise = getAllUsers();
</script>

<main>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite Logo" />
		</a>
		<a href="https://svelte.dev" target="_blank">
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</a>
	</div>
	<h1>Vite + Svelte</h1>

	<h1 class="text-3xl font-bold underline">Hello world!</h1>

	<div class="card">
		<Counter />
	</div>

	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app
		framework powered by Vite!
	</p>

	<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>

	{#await usersPromise}
		no users yet
	{:then users}
		{#each users as user}
			users is {user.name}
		{/each}
	{:catch}
		error when fetching users
	{/await}
</main>
