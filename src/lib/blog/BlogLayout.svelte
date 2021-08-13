<script>
	import { page } from '$app/stores';

	import NavigationPath from '$lib/NavigationPath.svelte';

	export let longTitle;
	export let title;
	export let description;
	export let dateCreated;
	export let dateLastUpdated;
	export let usesKatex = false;

	const pageTitle = `prgm.dev / Blog / ${title}`;

	$: dateCreatedISO = dateCreated ? new Date(dateCreated).toISOString() : null;
	$: dataCreatedFormatted = new Date(dateCreated).toLocaleDateString('en', {
		dateStyle: 'long',
	});
	$: dateLastUpdatedFormatted =
		dateLastUpdated && dateLastUpdated !== dataCreatedFormatted
			? new Date(dateLastUpdated).toLocaleDateString('en', {
					dateStyle: 'long',
			  })
			: null;
</script>

<svelte:head>
	<title>{title} | prgm.dev</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:type" content="article" />
	{#if description}
		<meta name="description" property="og:description" content={description} />
	{/if}
	{#if dateCreatedISO}
		<meta property="og:article:published_time" content={dateCreatedISO} />
	{/if}
	{#if usesKatex}
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
			integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
			crossorigin="anonymous"
		/>
	{/if}
</svelte:head>

<div class="mx-auto w-full max-w-screen-md z-0">
	<!-- Page content with ToC on the side -->
	<div class="w-full max-w-screen-lg px-5 sm:px-2 lg:px-0 pt-5 pb-20">
		<NavigationPath removeLast={1} keepTrailingSlash={true}
			><br />
			<h1 id="article-title" class="text-4xl font-bold">
				{longTitle || title}
			</h1></NavigationPath
		>
		<article class="prose numbered" aria-labelledby="article-title">
			<div
				id="article-header"
				role="heading"
				aria-labelledby="article-title"
				class="mt-2"
			>
				<p class="text-sm">
					<span class="font-normal">{dataCreatedFormatted}</span
					>{#if dateLastUpdatedFormatted}
						<span class="font-light">
							&nbsp;(last updated on
							{dateLastUpdatedFormatted})</span
						>{/if}
				</p>
			</div>
			<slot />
		</article>
	</div>
</div>

<style lang="postcss" global>
	/* Set up the header margins to override Prose's defaults */
	.prose #article-header p {
		@apply my-0;
	}

	.prose #article-header h1 {
		@apply mt-0 mb-2;
	}

	/* Offset ID scrolling */
	.prose [id] {
		scroll-margin-top: 6rem;
	}

	/* Add a '#' sign next to all links, and undo underline */
	.prose h2 > a,
	.prose h3 > a,
	.prose h4 > a {
		text-decoration: none !important;
	}
	.prose h2:hover > a > span.anchor-sign,
	.prose h3:hover > a > span.anchor-sign {
		@apply opacity-100;
	}
	.prose h2 > a > span.anchor-sign::before,
	.prose h3 > a > span.anchor-sign::before {
		@apply z-0;
		content: '#';
	}
	.prose h2 > a > span.anchor-sign,
	.prose h3 > a > span.anchor-sign {
		@apply ml-2 no-underline text-accent opacity-0 transition-opacity;
	}

	.prose h2 > a > span.anchor-sign {
		@apply text-accent;
	}
</style>
