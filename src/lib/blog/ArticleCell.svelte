<script context="module" lang="ts">
	import type { MetadataT } from '$/types/blog-posts';

	export interface PostMetadata extends MetadataT {
		slug: string;
	}
</script>

<script lang="ts">
	export let post: PostMetadata | null = null;

	$: formattedTitle = post.title ?? '—';
</script>

{#if post}
	<a
		sveltekit:prefetch
		href="/blog/posts/{post.slug}"
		class="w-full h-full p-4 bg-light-alt dark:bg-dark-alt rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col"
	>
		<h2 class="text-xl font-semibold">{formattedTitle}</h2>
		{#if post.description}
			<p class="mt-2 text-sm opacity-60">{post.description}</p>
		{/if}
		<div class="flex-grow" />
		<p class="mt-2 highlight-on-hover">Read on...</p>
	</a>
{/if}

<style lang="postcss">
	.highlight-on-hover {
		@apply transition-colors duration-300;
	}

	a:hover > .highlight-on-hover {
		@apply text-accent animate-pulse;
	}
</style>
