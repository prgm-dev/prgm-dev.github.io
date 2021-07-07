<script lang="ts">
	import Logo from '$lib/Logo.svelte';

	import { routesOrdered } from '$/globals/routes';
	import { page } from '$app/stores';

	let routesOrderedAugmented: (typeof routesOrdered[0] & {
		active: boolean;
	})[] = [];

	$: routesOrderedAugmented = routesOrdered.map((r) => ({
		...r,
		active: $page.path.startsWith(r.href),
	}));

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-- Top bar -->
<div
	class="w-full sticky top-0 h-20 px-4 py-2 bg-light dark:bg-dark {scrollY <= 0
		? 'shadow-none'
		: 'shadow-md'} z-40 transition-all"
>
	<div
		class="mx-auto max-w-screen-md w-full h-full flex items-center justify-between"
	>
		<Logo />
		<div />
		<nav>
			{#each routesOrderedAugmented as { href, active, name }}
				<a {href} class:selected={active}>{name}</a>
			{/each}
		</nav>
	</div>
</div>

<slot />

<style lang="postcss">
	/*
	 * Navigation links: add a `/` before each link
	 * (highlighting the current route)
	 */
	nav > a::before {
		@apply scale-125 font-bold opacity-40 transition-opacity duration-300;
		content: '/';
	}

	nav > a.selected::before {
		@apply text-accent opacity-80;
	}

	nav > a:hover:before {
		@apply opacity-100;
	}
</style>
