<script lang="ts">
	import type { Founder } from '$/types/founder';
	// Components
	import Fa from 'svelte-fa';
	import Logo from './Logo.svelte';
	// Svelte
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	// Icons
	import {
		faGithub,
		faGitlab,
		faKeybase,
		faLinkedin,
		faTelegramPlane,
	} from '@fortawesome/free-brands-svg-icons';
	import { faAt, faDownload, faIdCard } from '@fortawesome/free-solid-svg-icons';

	import { imageURLForFounder, removeAtPrefix } from '$/globals/founders';
	import type { VCardT } from '$/helpers/vcard';
	import { generateVCard } from '$/helpers/vcard';

	// Props
	export let founder: Founder;
	let businessCardGenerating = false;
	let businessCard: VCardT | null = null;

	// Computed properties
	$: pageTitle = `${founder.name.first} ${founder.name.last} | ${founder.title} @ prgm.dev`;
	$: imageSrc = imageURLForFounder(founder, 1024);
	$: fullImageSrc = imageURLForFounder(founder, 1024, true);
	let imageAlt: string;
	$: imageAlt = founder.image.alt ?? founder.name.first;
	const delays = {
		image: 200,
		header: 500,
		links: 750,
	};

	// Methods
	async function loadBusinessCard() {
		const founder_ = founder;
		if (!founder_ || businessCardGenerating) return;

		businessCardGenerating = true;
		try {
			businessCard = await generateVCard(founder_);
		} finally {
			businessCardGenerating = false;
		}
	}

	onMount(() => {
		// On load of the component, generate a business card
		void loadBusinessCard();
	});
</script>

<svelte:head>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:image" content={fullImageSrc} />
	<meta property="og:type" content="profile" />

	<title>{founder.name.first} {founder.name.last} | prgm.dev</title>
	<meta
		name="description"
		property="og:description"
		content="{founder.name.first} {founder.name
			.last} is {founder.title} at prgm.dev, a Paris-based company crafting delightful software."
	/>
	<meta property="og:profile:username" content={founder.identifier} />
	<meta property="og:profile:first_name" content={founder.name.first} />
	<meta property="og:profile:last_name" content={founder.name.last} />
</svelte:head>

<div class="mx-auto w-full max-w-screen-sm p-5 sm:p-0">
	<div class="mx-auto text-2xl xxs:text-4xl xs:text-4xl w-max sm:pt-5" role="banner">
		<Logo />
	</div>

	<main class="w-full" aria-label="{founder.name.first}'s virtual business card">
		<!-- Card -->
		<div
			class="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-10"
			role="presentation"
		>
			<!-- Photo -->
			<div
				role="presentation"
				class="mx-auto my-3 w-10/12 xxs:w-9/12 xs:w-8/12 sm:w-4/12 flex-shrink-0"
				in:fly={{ y: 50, duration: 250, delay: delays.image }}
			>
				<div
					role="presentation"
					class="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden border dark:border-dark"
				>
					<img src={imageSrc} alt={imageAlt} />
				</div>
			</div>

			<div class="flex-grow flex flex-col space-y-4 justify-around">
				<!-- Name & Title -->
				<div
					class="flex-shrink-0 w-full flex flex-row justify-start items-center"
					aria-labelledby="{founder.identifier}-name"
					aria-describedby="{founder.identifier}-title"
					in:fade={{ duration: 250, delay: delays.header }}
				>
					<div class="flex-shrink-0">
						<h1 id="{founder.identifier}-name" class="text-2xl xxs:text-3xl sm:text-2xl">
							{founder.name.first}
							<span class="small-caps">
								{founder.name.last}
							</span>
						</h1>
						<h2 id="{founder.identifier}-title" class="text-lg xxs:text-2xl sm:text-lg opacity-50">
							{founder.title} at
							<a href="/" class="hover:underline">prgm.dev</a>
						</h2>
					</div>
					<div class="flex-grow" />
					<div class="flex-shrink-0 block hoverable:hidden">
						{#if !businessCard}
							<button
								class="bg-light-alt dark:bg-dark-alt rounded-md disabled:opacity-50 transition-opacity w-max h-full p-2"
								disabled={businessCardGenerating}
								on:click={loadBusinessCard}><Fa icon={faIdCard} fw class="inline" /></button
							>
						{:else}
							<a
								class="bg-light-alt dark:bg-dark-alt rounded-md block w-max h-full p-2"
								download="{founder.name.first}_{founder.name
									.last}.{businessCard.getFileExtension()}"
								href="data:{businessCard.getContentType()};charset=utf-8,{encodeURI(
									businessCard.toString()
								)}"><Fa icon={faDownload} fw class="inline" /></a
							>
						{/if}
					</div>
				</div>

				<!-- Social Media Links -->
				<div
					aria-label="Contact & Social media links"
					class="flex-shrink-0 grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 text-base xxs:text-lg sm:text-base"
				>
					<a
						href="mailto:{founder.identifier}@prgm.dev"
						in:fade={{ duration: 250, delay: delays.links }}
					>
						<Fa icon={faAt} fw class="inline" />
						<span><span>{founder.identifier}</span><span class="low-contrast">@prgm.dev</span></span
						>
					</a>
					<!-- FIXME: the `whitespace-nowrap` is a workaround for Tristan's LinkedIn
												profile name that is too long, and breaks only if the screen width
												is close to the `md` screen size. -->
					<a
						title="LinkedIn profile"
						href="https://www.linkedin.com/in/{founder.social.linkedIn}/"
						target="_blank"
						class="whitespace-nowrap"
						rel="noopener noreferrer"
						in:fade={{ duration: 250, delay: delays.links }}
					>
						<Fa icon={faLinkedin} fw class="inline" />
						<span><span class="low-contrast">/</span>{founder.social.linkedIn}</span>
					</a>
					{#if founder.social.telegram}
						{@const telegramUserNameWithoutAt = removeAtPrefix(founder.social.telegram)}
						<a
							title="Telegram"
							href="https://t.me/{telegramUserNameWithoutAt}/"
							target="_blank"
							rel="noopener noreferrer"
							in:fade={{ duration: 250, delay: delays.links }}
						>
							<Fa icon={faTelegramPlane} fw class="inline" />
							<span><span class="low-contrast">@</span>{telegramUserNameWithoutAt}</span>
						</a>
					{/if}
					{#if founder.social.github}
						<a
							title="GitHub profile"
							href="https://github.com/{founder.social.github}/"
							target="_blank"
							rel="noopener noreferrer"
							in:fade={{ duration: 250, delay: delays.links }}
						>
							<Fa icon={faGithub} fw class="inline" />
							<span><span class="low-contrast">@</span>{founder.social.github}</span>
						</a>
					{/if}
					{#if founder.social.gitlab}
						<a
							title="GitLab profile"
							href="https://gitlab.com/{founder.social.gitlab}/"
							target="_blank"
							rel="noopener noreferrer"
							in:fade={{ duration: 250, delay: delays.links }}
						>
							<Fa icon={faGitlab} fw class="inline" />
							<span><span class="low-contrast">@</span>{founder.social.gitlab}</span>
						</a>
					{/if}
					{#if founder.social.keybase}
						<a
							title="Keybase profile"
							href="https://keybase.io/{founder.social.keybase}/"
							target="_blank"
							rel="noopener noreferrer"
							in:fade={{ duration: 250, delay: delays.links }}
						>
							<Fa icon={faKeybase} fw class="inline" />
							<span><span class="low-contrast">/</span>{founder.social.keybase}</span>
						</a>
					{/if}
					{#if !!businessCard}
						<a
							download="{founder.name.first}_{founder.name.last}.{businessCard.getFileExtension()}"
							href="data:{businessCard.getContentType()};charset=utf-8,{encodeURI(
								businessCard.toString()
							)}"
							class="hidden hoverable:inline"
							in:fade={{ duration: 250, delay: delays.links }}
						>
							<Fa icon={faIdCard} fw class="inline" />
							<span
								>{founder.name.first}<span class="low-contrast">_</span>{founder.name.last}<span
									class="low-contrast">.{businessCard.getFileExtension()}</span
								></span
							>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</main>
</div>

<style lang="postcss">
	a > span {
		@apply transition-all "hoverable:hover:underline" "hoverable:hover:text-accent";
	}

	a > span > .low-contrast {
		@apply opacity-50;
	}

	a > span:hover > .low-contrast {
		@apply opacity-100;
	}
</style>
