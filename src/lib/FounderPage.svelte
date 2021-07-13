<script lang="ts">
	import type { Founder } from '$/types/founder';

	// Components
	import Fa from 'svelte-fa/src/fa.svelte';
	import Logo from './Logo.svelte';

	// Icons
	import { faAt } from '@fortawesome/free-solid-svg-icons';
	import {
		faGithub,
		faGitlab,
		faKeybase,
		faLinkedin as faLinkedin,
	} from '@fortawesome/free-brands-svg-icons';

	// Props
	export let founder: Founder | null = null;

	// Computed properties
	const pageTitle = !!founder
		? `${founder.name.first} ${founder.name.last} | ${founder.title} @ PRGM.dev`
		: 'Founder profile @ PRGM.dev';
	const imageSrc: string =
		'src' in founder.image
			? founder.image.src
			: `https://www.gravatar.com/avatar/${founder.image.gravatarHash}?size=1024`;
	const fullImageSrc: string =
		'src' in founder.image
			? `https://prgm.dev${founder.image.src}`
			: `https://www.gravatar.com/avatar/${founder.image.gravatarHash}?size=1024`;
	const imageAlt: string = founder.image.alt ?? founder.name.first;
</script>

<svelte:head>
	<title>{founder.name.first} {founder.name.last} | PRGM.dev</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:image" content={fullImageSrc} />
	<meta property="og:type" content="profile" />

	{#if founder}
		<meta
			name="description"
			property="og:description"
			content="{founder.name.first} {founder.name
				.last} is {founder.title} at PRGM Dev, a Paris-based company crafting delightful software."
		/>
		<meta property="og:profile:username" content={founder.identifier} />
		<meta property="og:profile:first_name" content={founder.name.first} />
		<meta property="og:profile:last_name" content={founder.name.last} />
	{/if}
</svelte:head>

<div class="mx-auto w-full max-w-screen-sm p-5 sm:p-0">
	<div class="mx-auto w-max" role="banner">
		<Logo />
	</div>

	<main
		class="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-10"
		aria-label="{founder.name.first}'s virtual business card"
	>
		{#if founder}
			<!-- Photo -->
			<div
				role="presentation"
				class="mx-auto my-3 w-10/12 xxs:w-9/12 xs:w-8/12 sm:w-4/12 flex-shrink-0 rounded-xl overflow-hidden border dark:border-dark"
			>
				<div role="presentation" class="aspect-w-1 aspect-h-1">
					<img src={imageSrc} alt={imageAlt} />
				</div>
			</div>

			<div class="flex-grow flex flex-col space-y-4 justify-around">
				<!-- Name & Title -->
				<div
					class="flex-shrink-0"
					aria-labelledby="{founder.identifier}-name"
					aria-describedby="{founder.identifier}-title"
				>
					<h1
						id="{founder.identifier}-name"
						class="text-2xl xxs:text-4xl sm:text-2xl"
					>
						{founder.name.first}
						<span class="small-caps">
							{founder.name.last}
						</span>
					</h1>
					<h2
						id="{founder.identifier}-title"
						class="text-lg xxs:text-2xl sm:text-lg opacity-50"
					>
						{founder.title} at <a href="/" class="hover:underline">prgm.dev</a>
					</h2>
				</div>

				<!-- Social Media Links -->
				<div
					aria-label="Contact & Social media links"
					class="flex-shrink-0 grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 text-base xxs:text-lg sm:text-base"
				>
					<a href="mailto:{founder.identifier}@prgm.dev">
						<Fa icon={faAt} fw class="inline" />
						<span
							><span>{founder.identifier}</span><span class="low-contrast"
								>@prgm.dev</span
							></span
						>
					</a>
					<a
						title="LinkedIn profile"
						href="https://www.linkedin.com/in/{founder.social.linkedIn}/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Fa icon={faLinkedin} fw class="inline" />
						<span
							><span class="low-contrast">/</span>{founder.social
								.linkedIn}</span
						>
					</a>
					{#if founder.social.github}
						<a
							title="GitHub profile"
							href="https://github.com/{founder.social.github}/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Fa icon={faGithub} fw class="inline" />
							<span
								><span class="low-contrast">@</span>{founder.social
									.github}</span
							>
						</a>
					{/if}
					{#if founder.social.gitlab}
						<a
							title="GitLab profile"
							href="https://gitlab.com/{founder.social.gitlab}/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Fa icon={faGitlab} fw class="inline" />
							<span
								><span class="low-contrast">@</span>{founder.social
									.gitlab}</span
							>
						</a>
					{/if}
					{#if founder.social.keybase}
						<a
							title="Keybase profile"
							href="https://keybase.io/{founder.social.keybase}/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Fa icon={faKeybase} fw class="inline" />
							<span
								><span class="low-contrast">/</span>{founder.social
									.keybase}</span
							>
						</a>
					{/if}
				</div>
			</div>
		{/if}
	</main>
</div>

<style lang="postcss">
	a > span {
		@apply transition-all hoverable:hover:underline hoverable:hover:text-accent;
	}

	a > span > .low-contrast {
		@apply opacity-50;
	}

	a > span:hover > .low-contrast {
		@apply opacity-100;
	}
</style>
