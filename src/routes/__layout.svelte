<script lang="ts">
	import '../app.postcss';

	const pageTitle = 'PRGM Dev';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
</svelte:head>

<slot />
