<script context="module" lang="ts">
	import type { Founder } from '$/types/founder';
	import { routesOrdered } from '$/globals/routes';

	// Remove JS when not in DEV (only on this page)
	import { dev } from '$app/env';
	export const router = dev;
	export const hydrate = dev;

	// Ensure content is pre-rendered
	export const prerender = true;

	// Constants
	export const copyrightStartYear = 2021;
	export const founders: Founder[] = [
		{
			name: { first: 'Sébastien', last: 'Ohleyer' },
			title: 'CEO',
			image: { src: '/img/sebastien.jpg' },
		},
		{
			name: { first: 'Alexandre', last: 'Jouandin' },
			title: 'CTO',
			image: { gravatarHash: 'daf8a0f2457da63e3c2e15cc2e4319e3' },
		},
		{
			name: { first: 'Tristan', last: 'Stérin' },
			title: 'COO',
			image: { src: '/img/tristan-512.jpg' },
		},
	];
</script>

<script lang="ts">
	import FounderCard from '$lib/FounderCard.svelte';
	import Logo from '$lib/Logo.svelte';

	const currentYear = new Date().getFullYear();
	const copyrightString =
		currentYear === copyrightStartYear
			? `${copyrightStartYear}`
			: `${copyrightStartYear} — ${currentYear}`;
</script>

<!-- Top bar -->
<div
	class="w-full sticky top-0 h-20 px-4 py-2 bg-light dark:bg-dark border-b dark:border-dark-alt"
>
	<div
		class="mx-auto max-w-screen-md w-full h-full flex items-center justify-between"
	>
		<Logo />
		<div />
		<nav>
			{#each routesOrdered as { href, name }}
				<a {href}>{name}</a>
			{/each}
		</nav>
	</div>
</div>

<main class="z-0">
	<!-- Heading -->
	<section class="mx-auto w-full max-w-screen-md flex px-4 md:px-5 my-10 z-40">
		<div class="w-11/12 sm:w-9/12 flex flex-col space-y-3 px-5">
			<h1 class="text-4xl sm:text-5xl font-semibold">
				Let's build something <span class="sm:whitespace-nowrap"
					><span class="text-5xl sm:text-6xl small-caps text-accent font-bold"
						>big</span
					> together</span
				>.
			</h1>
			<p class="text-sm sm:text-base">
				We are committed to producing excellent quality interactive software. We
				specialise in developing real time solutions for real world problems
				with a strong focus on software reliability and user experience.
			</p>
			<!-- Call to action with email -->
			<!-- Note: Email is encoded to avoid spam bots -->
			<a
				href="&#109;&#65;&#105;&#108;&#84;&#79;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#112;&#114;&#103;&#109;&#46;&#100;&#101;&#118;&#63;&#115;&#117;&#98;&#106;&#101;&#99;&#116;&#61;&#72;&#101;&#108;&#108;&#111;&#37;&#50;&#49;"
				class="block w-max bg-accent rounded-lg py-3 px-4 text-xl sm:text-2xl font-medium text-white dark:text-dark"
				>Work with us!</a
			>
		</div>
	</section>

	<!-- Founders -->
	<section class="mx-auto w-full max-w-screen-md my-5 px-4 md:px-5">
		<h2>Our founders</h2>
		<div
			class="mx-auto w-3/4 sm:w-full grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-x-8"
		>
			{#each founders as founder (founder.name.last)}
				<FounderCard {founder} />
			{/each}
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
			<span class="whitespace-nowrap"
				>&copy;&nbsp;{copyrightString} PRGM DEV SAS.</span
			>
			<span class="whitespace-nowrap">All rights reserved.</span>
		</h3>
	</div>
</footer>

<style lang="postcss">
	section > h2 {
		@apply text-3xl ml-5 mb-5;
	}

	/* Navigation links: add a `/` before each link */
	nav > a::before {
		@apply scale-125 font-bold opacity-40 transition-opacity duration-300;
		content: '/';
	}

	nav > a:hover:before {
		@apply opacity-100;
	}
</style>
