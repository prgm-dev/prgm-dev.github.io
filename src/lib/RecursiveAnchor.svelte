<script lang="ts">
	export let links: { href?: string; value: string }[] = [];

	let currentLink: typeof links[0] = { href: '/', value: '/' };
	$: if (links.length > 0) currentLink = links[0];
	let children: typeof links = [];
	$: if (links.length > 1) children = links.slice(1);
</script>

{#if currentLink.href}
	<a href={currentLink.href}>
		{currentLink.value}
		{#if children.length > 0}
			<svelte:self links={children}>
				<slot />
			</svelte:self>
		{:else}
			<slot />
		{/if}
	</a>
{:else}
	<span>
		{currentLink.value}
		{#if children.length > 0}
			<svelte:self links={children}>
				<slot />
			</svelte:self>
		{:else}
			<slot />
		{/if}
	</span>
{/if}
