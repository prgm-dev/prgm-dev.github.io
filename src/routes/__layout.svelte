<script lang="ts">
	import { navigating, page } from '$app/stores';
	// Import font CSS
	import BrahmaRoundedBoldWoffSrc from '$lib/assets/fonts/BrahmaRoundedBold/font.woff';
	import BrahmaRoundedBoldWoff2Src from '$lib/assets/fonts/BrahmaRoundedBold/font.woff2';
	import '$lib/assets/fonts/fonts.css';
	// Import Windi Global CSS
	import 'virtual:windi.css';
	// Import our CSS
	import '$/app.windi.css';
	// Import Plausible analytics
	import '$/globals/plausible';
	// Using NProgress, show a loading bar on navigation
	import NProgress from 'nprogress';

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
	<!-- Fonts preload/pre-connect -->
	<link href={BrahmaRoundedBoldWoff2Src} type="font/woff2" rel="preload" as="font" crossorigin="" />
	<link href={BrahmaRoundedBoldWoffSrc} type="font/woff" rel="preload" as="font" crossorigin="" />

	<!-- Website Title -->
	<title>{websiteTitle}</title>

	<!-- Constant meta tags -->
	<meta name="keywords" content="prgm.dev, PRGM DEV SAS, Software Design, Paris" />
	<meta name="robots" content="index, follow" />

	<!-- OpenGraph constants -->
	<meta property="og:site_name" content={websiteTitle} />
	<meta property="og:url" content="https://prgm.dev{$page.url.pathname}" />
</svelte:head>

<slot />
