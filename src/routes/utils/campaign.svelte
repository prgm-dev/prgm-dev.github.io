<script lang="ts" context="module">
	import { founders } from '$/globals/founders';
	import { browser, prerendering } from '$app/env';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slugMapping as blogSlugs } from '../blog/index.svelte';

	const recommendedCampaigns = ['ethcc'] as const;
	const recommendedMedia = [
		{ medium: 'email', description: 'The link will be shared via email' },
		{ medium: 'message', description: 'The link will be shared via SMS or iMessage' },
		{ medium: 'telegram', description: 'The link will be shared via Telegram' },
		{ medium: 'whatsapp', description: 'The link will be shared via WhatsApp' },
	] as const;
	const recommendedSources = ['IRL', 'Twitter', 'LinkedIn', 'Facebook'] as const;

	const links = [
		{ categoryName: 'Main', links: [{ title: 'Home', path: '/' }] },
		{
			categoryName: 'Founders',
			links: founders
				.map((founder) => ({
					title: founder.name.first,
					path: `/${founder.identifier}`,
				}))
				.sort((a, b) => a.title.localeCompare(b.title)),
		},
		{
			categoryName: 'Blog',
			links: [
				{
					title: 'Home',
					path: '/blog',
				},
			].concat(
				...blogSlugs
					.map(({ slug, metadata }) => ({
						title: metadata.title ?? slug,
						path: `/blog/posts/${slug}`,
					}))
					.sort((a, b) => a.title.localeCompare(b.title))
			),
		},
	] as const;

	const availableDomains = ['prgm.dev'] as const;

	function encode(s: string, options: { lowercase?: boolean } = {}): string {
		if (options.lowercase) s = s.toLowerCase();
		return encodeURIComponent(s);
	}

	function buildUrl(components: {
		protocol: string;
		domain: string;
		path: string;
		medium: string;
		source: string;
		campaign: string;
	}): URL {
		const url = new URL(components.path, `${components.protocol}//${components.domain}`);
		if (components.medium)
			url.searchParams.set('utm_medium', encode(components.medium, { lowercase: true }));
		if (components.source)
			url.searchParams.set('utm_source', encode(components.source, { lowercase: false }));
		if (components.campaign)
			url.searchParams.set('utm_campaign', encode(components.campaign, { lowercase: true }));
		return url;
	}

	function cleanUpInput(s: unknown, options: { lowercase?: boolean } = {}): string {
		if (!s || typeof s !== 'string') return '';
		let result = s
			// Remove leading and trailing whitespace
			.trim()
			// Remove accents
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '')
			// Replace non-alphanumeric characters with a `-`
			.replace(/[^a-zA-Z0-9-]+/g, '-');
		if (options.lowercase) result = result.toLowerCase();
		return result;
	}
</script>

<script lang="ts">
	let utmSource: string = '',
		utmCampaign = '',
		utmMedium = '';

	$: originProtocol = $page.url.protocol;
	$: originDomain = prerendering || !browser ? 'prgm.dev' : $page.url.host;

	$: domains = [...new Set([originDomain, ...availableDomains]).values()].sort((a, b) =>
		a.localeCompare(b)
	);
	let selectedDomain = '';
	$: !selectedDomain && originDomain && (selectedDomain = originDomain);

	let selectedLinkPath: string = links[0].links[0].path;

	$: selectedMedium = utmMedium
		? recommendedMedia.find((medium) => medium.medium === utmMedium) ?? null
		: null;

	$: outputUrl = buildUrl({
		protocol: originProtocol,
		domain: selectedDomain,
		path: selectedLinkPath,
		medium: utmMedium,
		source: utmSource,
		campaign: utmCampaign,
	});
	$: outputLink = outputUrl.href;

	let copiedToClipboard = false;
	let canShare = false;
	onMount(() => {
		canShare = !!navigator.share;
	});
</script>

<main class="mx-auto max-w-screen-md">
	<section class="w-full p-3 md:(border rounded-lg)">
		<!-- Title -->
		<header class="flex flex-row justify-between">
			<h1 class="text-xl font-medium">Campaign link builder</h1>
			<button type="reset" class="" />
		</header>
		<!-- Form -->
		<form
			on:submit|stopPropagation
			class="w-full grid grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-x-2"
		>
			<!-- Domain selector -->
			<label class="block w-full <md:overflow-x-hidden">
				<span class="block text-lg">Domain</span>
				<select class="h-10 w-full" required bind:value={selectedDomain}>
					{#each domains as domain}
						<option value={domain}>{domain}</option>
					{/each}
				</select>
			</label>
			<!-- Link selector -->
			<label class="block w-full <md:overflow-x-hidden md:col-span-2">
				<span class="block text-lg">Link</span>
				<select class="h-10 w-full" required bind:value={selectedLinkPath}>
					{#each links as linkGroup}
						<optgroup label={linkGroup.categoryName}>
							{#each linkGroup.links as link}
								<option value={link.path}>{link.title}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</label>

			<!-- UTM selectors -->
			<label class="block w-full">
				<span class="block text-lg">Source (required)</span>
				<input
					class="block w-full h-10"
					type="search"
					list="sources"
					pattern="[a-zA-Z0-9-]+"
					bind:value={utmSource}
					required
					on:change={({ currentTarget: { value } }) => (utmSource = cleanUpInput(value))}
				/>
				<datalist id="sources">
					{#each recommendedSources as source}
						<option value={source} />
					{/each}
				</datalist>
			</label>
			<div class="block w-full">
				<label>
					<span class="block text-lg">Campaign</span>
					<input
						autocapitalize="off"
						autocomplete="off"
						class="block w-full h-10"
						type="search"
						list="campaigns"
						pattern="[a-zA-Z0-9-]+"
						bind:value={utmCampaign}
						required
						on:change={({ currentTarget: { value } }) =>
							(utmCampaign = cleanUpInput(value, { lowercase: true }))}
					/>
				</label>
				<datalist id="campaigns">
					{#each recommendedCampaigns as campaign}
						<option value={campaign} />
					{/each}
				</datalist>
				<p class="opacity-75 pt-1">
					Exemple&nbsp;:
					<span class="font-mono select-all">{recommendedCampaigns[0]}</span>
				</p>
			</div>
			<div class="block w-full">
				<label>
					<span class="block text-lg">Medium</span>
					<input
						class="block w-full h-10"
						type="search"
						list="medium"
						pattern="[a-zA-Z0-9-]+"
						autocapitalize="off"
						autocomplete="off"
						bind:value={utmMedium}
						required
						on:change={({ currentTarget: { value } }) =>
							(utmMedium = cleanUpInput(value, { lowercase: true }))}
					/>
				</label>
				<datalist id="medium">
					{#each recommendedMedia as { medium }}
						<option value={medium} />
					{/each}
				</datalist>
				{#if selectedMedium}
					<p class="opacity-75 pt-1" transition:slide>
						{selectedMedium.description}
					</p>
				{/if}
			</div>
		</form>

		<output class="block w-full pt-5 pb-2">
			<textarea
				class="block select-all w-full w-full p-2 text-center rounded-md outline-none resize-none
							 focus:ring-2 focus:ring-dark focus:border-dark dark:(focus:ring-light focus:border-light)"
				rows={3}
				readonly
				value={outputLink}
			/>
			<div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3 py-2">
				<!-- Copy button -->
				<button
					type="button"
					class="p-3 h-10 w-full bg-dark text-white dark:(bg-white text-dark) rounded-md flex items-center transition-colors justify-center hoverable:hover:bg-opacity-90 active:bg-opacity-50 hoverable:active:bg-opacity-50"
					on:click={async () => {
						copiedToClipboard = true;
						await navigator.clipboard?.writeText(outputLink);
						setTimeout(() => (copiedToClipboard = false), 2_000);
					}}
				>
					{#if copiedToClipboard}
						Copié &#x2713;
					{:else}
						Copier
					{/if}
				</button>
				<button
					type="button"
					class="p-3 h-10 w-full bg-dark text-white dark:(bg-white text-dark) rounded-md flex items-center transition-colors justify-center
								 disabled:(cursor-not-allowed bg-opacity-5) not-disabled:hoverable:hover:bg-opacity-90 not-disabled:active:bg-opacity-50 not-disabled:hoverable:active:bg-opacity-50"
					disabled={!canShare}
					on:click={() => {
						const data = {
							title: 'Share link',
							url: outputLink,
						};
						if (!(canShare = navigator.canShare(data))) return;
						void navigator.share(data);
					}}
				>
					Partager
				</button>
			</div>
		</output>
	</section>
</main>

<style scoped lang="postcss">
	select {
		@apply bg-light-alt px-3 "dark:bg-dark-alt" text-dark "dark:text-light" border "dark:border-dark" rounded-md;
	}

	input[type='search'] {
		-webkit-appearance: none;
		@apply bg-light-alt px-3 "dark:bg-dark-alt" text-dark "dark:text-light" border "dark:border-dark" rounded-md;
	}
</style>
