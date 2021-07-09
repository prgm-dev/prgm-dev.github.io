<script context="module" lang="ts">
	// Ensure content is pre-rendered
	export const prerender = true;

	// Import articles
	import { metadata as cardanoArticle } from './posts/understanding-cardano-rewards.svelte.md';
	import { metadata as ourTechStack2020Article } from './posts/our-tech-stack-2020.svelte.md';
	import { metadata as ourTechStack2021Article } from './posts/our-tech-stack-2021.svelte.md';

	/** Maps Article Slugs to imported articles metadata */
	export const slugMapping = [
		{ slug: 'our-tech-stack-2021', metadata: ourTechStack2021Article },
		{ slug: 'our-tech-stack-2020', metadata: ourTechStack2020Article },
		{ slug: 'understanding-cardano-rewards', metadata: cardanoArticle },
	];
</script>

<script lang="ts">
	import type { PostMetadata } from '$lib/blog/ArticleCell.svelte';
	import ArticleCell from '$lib/blog/ArticleCell.svelte';
	import NavigationPath from '$lib/NavigationPath.svelte';

	const pageTitle = 'PRGM Dev / Blog';
	let posts: { [k: string]: PostMetadata } = Object.fromEntries(
		slugMapping.map(({ slug, metadata }) => [
			slug,
			// Add slug to each metadata object
			{ slug, ...metadata },
		])
	);

	let postsOrdered: PostMetadata[] = [];
	$: postsOrdered = Object.values(posts);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:type" content="website" />
	<meta
		name="description"
		property="og:description"
		content="Official blog of PRGM Dev, a Paris-based company crafting delightful software."
	/>
</svelte:head>

<!-- Centered container -->
<div class="mx-auto max-w-screen-md px-4 md:px-0 my-5">
	<NavigationPath />
	<h2 class="mt-2 text-xl opacity-60 w-full md:w-4/6">
		<span class="whitespace-nowrap">What we think</span>,
		<span class="whitespace-nowrap">what we’re working on</span>,
		<span class="whitespace-nowrap">and how we’re building it.</span>
	</h2>

	<div class="mt-5 h-screen">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each postsOrdered as post}
				<ArticleCell {post} />
			{/each}
		</div>
	</div>
</div>
