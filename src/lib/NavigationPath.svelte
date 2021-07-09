<script lang="ts">
	import { normalizePath, pathIsRegistered } from '$/globals/routes';

	import { uppercaseFirstLetter } from '$/helpers/formatting';

	import { page } from '$app/stores';
	import RecursiveAnchor from '$lib/RecursiveAnchor.svelte';

	export let removeLast: number = 0;
	export let keepTrailingSlash: boolean = false;

	// Split path into path components, removing empty components
	$: stringPathComponents = $page.path.split('/').filter((s) => s.length > 0);

	let pathComponents: {
		pathComponent: string;
		relativePath: string;
		name: string;
		isValid: boolean;
	}[] = [];
	$: {
		let partialPathComponents: typeof pathComponents = stringPathComponents.map(
			(pathString) => ({
				pathComponent: pathString,
				name: uppercaseFirstLetter(pathString),
				relativePath: '',
				isValid: false,
			})
		);

		// For each path component, compute the full path to the component
		let fullPath = '/';
		partialPathComponents.forEach(({ pathComponent }, idx) => {
			fullPath += pathComponent + '/';
			partialPathComponents[idx]['isValid'] =
				pathIsRegistered(fullPath) ||
				normalizePath(fullPath) === normalizePath($page.path);
			partialPathComponents[idx]['relativePath'] = fullPath;
		});

		if (removeLast > 0) {
			let actualRemoveLast = removeLast;
			if (keepTrailingSlash) actualRemoveLast -= 1;

			// Remove last components
			partialPathComponents =
				actualRemoveLast >= partialPathComponents.length
					? []
					: partialPathComponents.slice(
							0,
							partialPathComponents.length - actualRemoveLast
					  );
			if (keepTrailingSlash && partialPathComponents.length > 0)
				partialPathComponents[partialPathComponents.length - 1].name = '';
		}

		pathComponents = partialPathComponents;
	}

	$: links = pathComponents.map((p) => ({
		href: p.isValid ? p.relativePath : null,
		value: p.name,
	}));
</script>

<nav id="path-nav" aria-label={$page.path} class="text-3xl font-bold">
	<RecursiveAnchor {links}>
		<slot />
	</RecursiveAnchor>
</nav>

<style lang="postcss" global>
	#path-nav {
		@apply relative;
	}

	#path-nav a:before,
	#path-nav span:before,
	.offset-slash:before {
		@apply transition duration-300 text-accent hoverable:opacity-25 ml-1 mr-2;
		content: '/';
		transition-property: opacity;
	}

	#path-nav a:hover:before,
	#path-nav a:hover span:hover:before {
		@apply opacity-100;
	}

	#path-nav > a:before,
	.offset-slash:before {
		@apply lg:absolute lg:top-0 lg:-translate-x-5 hidden lg:inline;
	}
</style>
