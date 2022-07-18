<script lang="ts">
	import { routesOrdered } from '$/globals/routes';
	import Logo from '$lib/Logo.svelte';

	let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<div role="presentation">
	<!-- Top bar -->
	<div
		role="banner"
		class="sticky top-0 h-20 px-4 py-2 bg-light dark:bg-dark {scrollY <= 0
			? 'shadow-none'
			: 'shadow-md'} z-40 transition-all"
	>
		<div class="mx-auto max-w-screen-md h-full flex items-center justify-between">
			<span class="text-3xl" role="presentation">
				<Logo />
			</span>
			<div />
			<nav>
				{#each routesOrdered as { href, name }}
					<a sveltekit:prefetch {href}>{name}</a>
				{/each}
			</nav>
		</div>
	</div>

	<slot />
</div>
