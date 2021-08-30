<script context="module" lang="ts">
	import { routesOrdered } from '$/globals/routes';

	// Ensure content is pre-rendered
	export const prerender = true;

	// Constants
	import { copyrightStartYear } from '$/globals/constants';
	import { founders } from '$/globals/founders';
</script>

<script lang="ts">
	// Components
	import Fa from 'svelte-fa/src/fa.svelte';
	import FounderCard from '$lib/landing-page/FounderCard.svelte';
	import SkillCard from '$lib/landing-page/SkillCard.svelte';
	import Logo from '$lib/Logo.svelte';
	import ProjectCell from '$lib/landing-page/ProjectCell.svelte';

	// Icons
	import {
		faBrain,
		faCode,
		faDraftingCompass,
	} from '@fortawesome/free-solid-svg-icons';

	const pageTitle = 'prgm.dev';
	const currentYear = new Date().getFullYear();
	const copyrightString =
		currentYear === copyrightStartYear
			? `${copyrightStartYear}`
			: `${copyrightStartYear} — ${currentYear}`;

	let scrollY = 0;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />

	<!-- OpenGraph property that are specific to the landing page -->
	<meta
		name="description"
		property="og:description"
		content="Official website of prgm.dev, a Paris-based company crafting delightful software."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://prgm.dev/favicon/opengraph.png" />
	<meta property="og:image:alt" content="prgm.dev logo with monogram" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter OpenGraph constants -->
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<svelte:window bind:scrollY />

<div class="dark" role="presentation">
	<!-- Top bar -->
	<div
		role="banner"
		class="sticky top-0 h-20 px-4 py-2 bg-dark {scrollY <= 0
			? 'shadow-none'
			: 'shadow-md'} z-40 transition-all"
	>
		<div
			class="mx-auto max-w-screen-md h-full flex items-center justify-between"
		>
			<span class="text-3xl" role="presentation">
				<Logo />
			</span>
			<div />
			<nav>
				{#each routesOrdered as { href, name }}
					<a {href}>{name}</a>
				{/each}
			</nav>
		</div>
	</div>

	<main class="z-0 mx-auto max-w-screen-md">
		<!-- Heading -->
		<section
			id="hello"
			class="mx-auto flex"
			aria-labelledby="slogan"
			aria-describedby="slogan-description"
		>
			<div class="flex flex-col space-y-8">
				<h1 id="slogan" class="text-4xl sm:text-5xl font-rounded">
					Let’s build something
					<span class="sm:whitespace-nowrap">
						<span class="text-5xl sm:text-6xl small-caps text-accent">
							big
						</span>
						together.
					</span>
				</h1>
				<p id="slogan-description" class="text-lg w-4/5">
					We provide software consulting and development services by
					specialising in the construction of real time solutions for real world
					problems with a strong focus on software reliability and user
					experience.
				</p>
				<!-- Call to action with email -->
				<a
					href="mailto:contact@prgm.dev?subject=Hello%21"
					class="block w-max bg-accent rounded-lg py-3 px-4 text-xl sm:text-2xl font-rounded text-dark"
					>Work with us!</a
				>
			</div>
		</section>

		<!-- Expertise -->
		<section
			aria-labelledby="expertise-heading"
			aria-describedby="expertise-description"
		>
			<header>
				<h2 id="expertise-heading">Our expertise</h2>
				<p id="expertise-description">
					At prgm.dev, we are like minded engineers and researchers who share
					the same passion for technological challenges.
				</p>
			</header>
			<div
				class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-x-8 lg:-ml-11"
			>
				<SkillCard>
					<svelte:fragment slot="title">Coding</svelte:fragment>
					<svelte:fragment slot="icon">
						<Fa icon={faCode} size="1.2x" />
					</svelte:fragment>

					We have very high standards with regards to code. Our code is backed
					by robust theory, follows the best practices from various industries,
					is tested in real-world conditions, and scales appropriately.
				</SkillCard>
				<SkillCard>
					<svelte:fragment slot="title">Artificial Intelligence</svelte:fragment
					>
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

					We have built multiple products from the ground up. We have a deep
					understanding of product design, and on how to make software products
					reach their full potential.
				</SkillCard>
			</div>
		</section>

		<!-- Ventures -->
		<section
			class="z-0"
			aria-labelledby="ventures-heading"
			aria-describedby="ventures-description"
		>
			<header>
				<h2 id="ventures-heading">Our ventures</h2>
				<p id="ventures-description">
					Aside from our consulting work, we also build projects of our own. We
					team up with ambitious entrepreneurs of various industries to solve
					the problems that they face.
				</p>
			</header>
			<div class="flex flex-row flex-wrap items-start justify-around">
				<ProjectCell href="https://surveyhouse.app">
					<span slot="title">SurveyHouse</span>
					<span slot="description">House surveying software and app</span>
				</ProjectCell>
				<ProjectCell href="https://stake.green">
					<span slot="title">Stake.Green</span>
					<span slot="description">
						Energy-friendly
						<span class="whitespace-nowrap">cryptocurrency mining</span>
					</span>
				</ProjectCell>
				<ProjectCell href="https://joule.prgm.studio/">
					<span slot="title">Joule</span>
					<span slot="description">AI-Dataset hosting made simple</span>
				</ProjectCell>
				<ProjectCell href="#hello" opensInNewTab={false}>
					<span slot="title" class="opacity-40">Our Project Together?</span>
					<span slot="description" class="opacity-40">
						<span class="whitespace-nowrap">
							Let's add another one to that list.
						</span> <span class="whitespace-nowrap">Get in touch with us!</span>
					</span>
				</ProjectCell>
			</div>
		</section>

		<!-- Founders -->
		<section aria-labelledby="founders-heading">
			<header>
				<h2 id="founders-heading">Our founders</h2>
			</header>
			<div
				class="lg:-mt-4 mx-auto w-3/4 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-x-8"
			>
				{#each founders as founder (founder.name.last)}
					<FounderCard {founder} />
				{/each}
			</div>
		</section>

		<!-- They trust us -->
		<section aria-labelledby="testimonials-heading">
			<header>
				<h2 id="testimonials-heading">They trust us</h2>
			</header>
			<div
				class="w-full flex flex-nowrap space-x-4 md:space-x-10 items-center justify-around md:justify-start"
			>
				<a href="https://devor.me" title="Devor" target="_blank" rel="noopener">
					<div class="bg-[#F7EEE7] rounded p-3 md:p-4">
						<img
							class="max-h-10"
							src="/img/devor-logo-nobg.svg"
							alt="Devor Logo"
						/>
					</div>
				</a>
				<a
					href="https://panorama.group"
					title="Panorama Group"
					target="_blank"
					rel="noopener"
				>
					<div class="bg-[#EAEEF6] rounded p-3 md:p-4">
						<img
							class="max-h-10"
							src="/img/panorama-logo-nobg.svg"
							alt="Panorama Logo"
						/>
					</div>
				</a>
			</div>
		</section>
	</main>

	<footer class="mt-20 pb-10 opacity-25">
		<div
			class="flex flex-col text-center items-center justify-center space-y-3 py-2"
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
</div>

<style lang="postcss">
	/* Navigation links: add a `/` before each link */
	nav > a::before {
		@apply scale-125 font-bold opacity-40 transition-opacity duration-300;
		content: '/';
	}

	nav > a:hover:before {
		@apply opacity-100;
	}

	[id] {
		scroll-margin-top: 6rem;
		scroll-snap-margin-top: 6rem;
	}

	.dark {
		@apply bg-dark text-light border-dark-alt;
	}

	section {
		@apply px-4 lg:px-0;
	}

	section:first-child {
		@apply mt-10;
	}

	section:not(:first-child) {
		@apply my-8 lg:my-14;
	}

	section header {
		@apply mb-5 lg:mb-10;
	}

	section header h2 {
		@apply text-3xl font-rounded;
	}

	section header p {
		@apply text-lg w-4/5 mt-4;
	}
</style>
