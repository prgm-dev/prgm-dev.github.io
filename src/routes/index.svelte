<script context="module" lang="ts">
	// Remove JS when not in DEV (only on this page)
	import { dev } from '$app/env';
	export const router = dev;
	export const hydrate = dev;

	// Ensure content is pre-rendered
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
<div class="w-full sticky top-0 h-20 px-4 py-2">
	<div class="mx-auto max-w-screen-md w-full h-full flex items-center justify-between">
		<Logo />
		<div />
		<nav>
			<button disabled>Blog</button>
		</nav>
	</div>
</div>

<!-- Body -->
<main>
	<section class="mx-auto w-full max-w-screen-md flex px-4 md:px-10 my-5">
		<div class="w-10/12 sm:w-2/3">
			<h1 class="text-3xl font-semibold">We make software.</h1>
		</div>
	</section>
</main>

<footer class="mt-20 mb-10 opacity-25 w-full">
	<div
		class="mx-auto max-w-screen-md w-full h-full flex flex-col text-center items-center justify-center space-y-3 py-2 px-4"
	>
		<h2 class="text-sm">
			PRGM DEV <br />
			SAS au capital de 999,99&nbsp;€ <br />
			9, rue des Colonnes, 75002 Paris
		</h2>
		<h3 class="text-sm">
			<span class="whitespace-nowrap">&copy;&nbsp;{copyrightString} PRGM DEV SAS.</span>
			<span class="whitespace-nowrap">All rights reserved.</span>
		</h3>
	</div>
</footer>

<style lang="postcss">
	button:disabled {
		@apply opacity-25 cursor-not-allowed;
	}
</style>
