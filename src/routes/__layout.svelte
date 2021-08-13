<script lang="ts">
	import { dev } from '$app/env';
	import { page } from '$app/stores';
	// Import global CSS
	import '../app.postcss';

	// Using NProgress, show a loading bar on navigation
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	const websiteTitle = 'prgm.dev';

	// Configure NProgress
	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.2,
		showSpinner: false,
		trickleSpeed: 100,
	});

	$: {
		if ($navigating) {
			// Schedule the progress bar to start with a little delay if we're still navigating
			setTimeout(() => {
				if ($navigating) NProgress.start();
			}, 100);
		} else NProgress.done();
	}
</script>

<svelte:head>
	<title>{websiteTitle}</title>

	<!-- Constant meta tags -->
	<meta
		name="keywords"
		content="prgm.dev, PRGM DEV SAS, Software Design, Paris"
	/>
	<meta name="robots" content="index, follow" />

	<!-- OpenGraph constants -->
	<meta property="og:site_name" content={websiteTitle} />
	<meta property="og:url" content="https://prgm.dev{$page.path}" />

	{#if !dev}
		<!-- Cookie-free, privacy-preserving analytics by https://plausible.io -->
		<script
			defer
			data-domain="prgm.dev"
			src="https://plausible.io/js/plausible.js"></script>
	{/if}
</svelte:head>

<slot />
