<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Logo from '$lib/Logo.svelte';

	const copyrightStartYear = 2021;
	const currentYear = new Date().getFullYear();
	const copyrightString =
		currentYear === copyrightStartYear
			? '' + copyrightStartYear
			: `${copyrightStartYear} — ${currentYear}`;
</script>

<!-- Top bar -->
<div class="w-full sticky top-0 h-20">
	<div class="mx-auto max-w-screen-md w-full h-full flex items-center justify-between py-2 px-4">
		<Logo />
		<div />
		<nav>
			<button>Blog</button>
		</nav>
	</div>
</div>

<!-- Body -->
<main>
	<div />
</main>

<footer class="mt-20 mb-10 opacity-25 w-full">
	<div
		class="mx-auto max-w-screen-md w-full h-full flex flex-col text-center items-center justify-center space-y-3 py-2 px-4"
	>
		<h2 class="text-sm">
			PRGM DEV <br />
			9 rue des colonnes, 75002 Paris
		</h2>
		<h3 class="text-sm">
			<span class="whitespace-nowrap">&copy;&nbsp;{copyrightString} PRGM DEV SAS.</span>
			<span class="whitespace-nowrap">All rights reserved.</span>
		</h3>
	</div>
</footer>
