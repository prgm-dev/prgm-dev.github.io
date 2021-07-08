<script lang="ts">
	// Import global CSS
	import '../app.postcss';

	// Using NProgress, show a loading bar on navigation
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	const pageTitle = 'PRGM Dev';

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
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<meta
		name="description"
		content="Official website of PRGM Dev, a Paris-based company crafting delightful software."
	/>
	<meta
		name="keywords"
		content="PRGM Dev, PRGM Dev SAS, Software Design, Paris"
	/>
	<meta name="robots" content="index, follow" />

	<!-- Cookie-free, privacy-preserving analytics by https://plausible.io -->
	<script
		defer
		data-domain="prgm.dev"
		src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<slot />
