<script lang="ts">
	import FounderPage from '$lib/FounderPage.svelte';
	import { page } from '$app/stores';

	import { foundersMapping } from '$/globals/founders';
	import type { Founder } from '$/types/founder';

	$: founder =
		foundersMapping.get($page.params.founderID as Founder['identifier']) ??
		null;
</script>

{#if !!founder}
	<FounderPage {founder} />
{/if}
