<script context="module" lang="ts">
	// Ensure content is pre-rendered
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { MetadataT } from '$/types/mdsvex';
	import type { PostMetadata } from '$lib/blog/ArticleCell.svelte';
	import ArticleCell from '$lib/blog/ArticleCell.svelte';

	/** References the slug to the article in the `posts/` folder. */
	const articleSlugs = [
		'our-tech-stack-2021',
		'our-tech-stack-2020',
		'understanding-cardano-rewards',
	];

	let posts: { [k: string]: PostMetadata } = {};
	let postsOrdered: PostMetadata[] = [];

	onMount(async () => {
		// Import all articles
		const articleImports = articleSlugs.map(
			async (slug): Promise<[string, MetadataT]> => [
				slug,
				(await import(`./posts/${slug}.svelte.md`)).metadata,
			]
		);
		posts = Object.fromEntries(
			(await Promise.all(articleImports)).map(([slug, metadata]) => [
				slug,
				// Add slug to each metadata object
				{ slug, ...metadata },
			])
		);
	});

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
