<script context="module" lang="ts">
	import type { Founder } from '$/types/founder';
	import { routesOrdered } from '$/globals/routes';

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
	// Components
	import Fa from 'svelte-fa/src/fa.svelte';
	import FounderCard from '$lib/landing-page/FounderCard.svelte';
	import SkillCard from '$lib/landing-page/SkillCard.svelte';
	import Logo from '$lib/Logo.svelte';

	// Icons
	import {
		faBrain,
		faCode,
		faDraftingCompass,
	} from '@fortawesome/free-solid-svg-icons';

	const pageTitle = 'PRGM Dev';
	const currentYear = new Date().getFullYear();
	const copyrightString =
		currentYear === copyrightStartYear
			? `${copyrightStartYear}`
			: `${copyrightStartYear} — ${currentYear}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />

	<meta
		name="description"
		property="og:description"
		content="Official website of PRGM Dev, a Paris-based company crafting delightful software."
	/>
</svelte:head>

<!-- Top bar -->
<div
	role="banner"
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
	<section
		class="mx-auto w-full max-w-screen-md flex px-4 md:px-5 my-10 z-40"
		aria-labelledby="slogan"
		aria-describedby="slogan-description"
	>
		<div class="w-11/12 sm:w-9/12 flex flex-col space-y-3 px-5">
			<h1 id="slogan" class="text-4xl sm:text-5xl font-semibold">
				Let's build something <span class="sm:whitespace-nowrap"
					><span class="text-5xl sm:text-6xl small-caps text-accent font-bold"
						>big</span
					> together</span
				>.
			</h1>
			<p id="slogan-description" class="text-sm sm:text-base">
				We are committed to producing excellent quality interactive software. We
				specialise in developing real time solutions for real world problems
				with a strong focus on software reliability and user experience.
			</p>
			<!-- Call to action with email -->
			<a
				href="mailto:contact@prgm.dev?subject=Hello%21"
				class="block w-max bg-accent rounded-lg py-3 px-4 text-xl sm:text-2xl font-medium text-white dark:text-dark"
				>Work with us!</a
			>
		</div>
	</section>

	<!-- Expertise -->
	<section
		class="mx-auto w-full max-w-screen-md my-5 px-4 md:px-5"
		aria-labelledby="expertise-heading"
		aria-describedby="expertise-subheading"
	>
		<h2 id="expertise-heading" class="text-3xl ml-5 mb-2">Our expertise</h2>
		<h4 id="expertise-subheading" class="text-base ml-5 mb-5 w-3/4">
			At PRGM.dev, we are like minded engineers and researchers who share the
			same passion for technological challenge.
		</h4>
		<div
			class="mx-auto w-3/4 sm:w-full grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-x-6"
		>
			<SkillCard>
				<svelte:fragment slot="title">Coding</svelte:fragment>
				<svelte:fragment slot="icon">
					<Fa icon={faCode} size="1.2x" />
				</svelte:fragment>

				We have very high standards with regards to code. Our code is backed by
				robust theory, follows the best practices from various industries, is
				tested in real-world conditions, and scales appropriately.
			</SkillCard>
			<SkillCard>
				<svelte:fragment slot="title">Artificial Intelligence</svelte:fragment>
				<svelte:fragment slot="icon">
					<Fa icon={faBrain} size="1.2x" />
				</svelte:fragment>

				We have expertise in multiple AI fields, such as computer vision,
				natural language processing, and machine learning. Our experience is
				extensive, and we leverage it to solve real world problem.
			</SkillCard>
			<SkillCard>
				<svelte:fragment slot="title">Product design</svelte:fragment>
				<svelte:fragment slot="icon">
					<Fa icon={faDraftingCompass} size="1.2x" />
				</svelte:fragment>

				We have built multiple products, with our own funds and from the ground
				up, learning product design, testing and evaluation. We have a deep
				understanding of product design, and how to make our products reach
				their potential.
			</SkillCard>
		</div>
	</section>

	<!-- Founders -->
	<section
		class="mx-auto w-full max-w-screen-md my-5 px-4 md:px-5"
		aria-labelledby="founders-heading"
	>
		<h2 id="founders-heading" class="text-3xl ml-5 mb-5">Our founders</h2>
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
			9, rue des Colonnes, 75002 Paris <br />
			901 331 264 R.C.S. PARIS
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
	/* Navigation links: add a `/` before each link */
	nav > a::before {
		@apply scale-125 font-bold opacity-40 transition-opacity duration-300;
		content: '/';
	}

	nav > a:hover:before {
		@apply opacity-100;
	}
</style>
