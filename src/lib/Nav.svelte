<script lang="ts">
	let mobileMenuIsOpen = false;

	function toggleMobileMenu() {
		mobileMenuIsOpen = !mobileMenuIsOpen;
	}
</script>

<nav class="bg-gray-800 text-white mb-8">
	<div class="default-width-padding">
		<div class="flex items-center justify-between h-10">
			<div class="hidden md:block">
				<div class="flex items-center justify-between space-x-8">
					<div>
						<a href="/machines/laser">laser cutter</a>
					</div>
					<div>
						<a href="/machines/plasma">plasma cutter</a>
					</div>
					<div>
						<a href="/machines/cnc_wood">cnc wood</a>
					</div>
					<div>
						<a href="/machines/cnc_plastic">cnc plastic</a>
					</div>
				</div>
			</div>

			<div class="-mr-2 flex md:hidden">
				<button
					on:click={toggleMobileMenu}
					class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<svg
						class:hidden={mobileMenuIsOpen}
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg
					>
					<svg
						class:hidden={!mobileMenuIsOpen}
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg
					>
				</button>
			</div>
		</div>

		<div class:hidden={!mobileMenuIsOpen} class="md:hidden" id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<div>
					<a href="/machines/laser">laser cutter</a>
				</div>
				<div>
					<a href="/machines/plasma">plasma cutter</a>
				</div>
				<div>
					<a href="/machines/cnc_wood">cnc wood</a>
				</div>
				<div>
					<a href="/machines/cnc_plastic">cnc plastic</a>
				</div>
			</div>
		</div>
	</div>
</nav>
