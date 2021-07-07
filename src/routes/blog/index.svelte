<script context="module" lang="ts">
	// Ensure content is pre-rendered
	export const prerender = true;

	// Import articles
	import { metadata as cardanoArticle } from '../blog/posts/understanding-cardano-rewards.svelte.md';
	import { metadata as ourTechStack2020Article } from '../blog/posts/our-tech-stack-2020.svelte.md';
	import { metadata as ourTechStack2021Article } from '../blog/posts/our-tech-stack-2021.svelte.md';

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

<!-- Centered container -->
<div class="mx-auto max-w-screen-md px-4 md:px-1 my-5">
	<a class="blog-title" href="/blog">
		<h1 class="text-3xl font-bold">Blog</h1>
	</a>
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

<style lang="postcss">
	.blog-title {
		@apply relative;
	}

	.blog-title > h1::before {
		@apply lg:absolute lg:top-0 lg:-translate-x-4 -translate-y-1 scale-125 text-accent hidden lg:inline;
		content: '/';
	}
</style>
