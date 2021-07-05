<script lang="ts">
	import '../app.postcss';

	const pageTitle = 'PRGM Dev';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<!-- Cookie-free, privacy-preserving analytics by https://plausible.io -->
	<script
		defer
		data-domain="prgm.dev"
		src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<slot />
