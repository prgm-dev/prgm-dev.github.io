<script lang="ts" context="module">
	import { isValidFounderIdentifier, type Founder } from '$/types/founder';
	import FounderPage from '$lib/FounderPage.svelte';
	import { foundersMapping } from '$/globals/founders';
	import type { Load } from './__types/[founderID]';

	export const load: Load = ({ params }) => {
		const redirectResponse: ReturnType<Load> = { redirect: '/', status: 301 };
		if (!isValidFounderIdentifier(params.founderID)) {
			return redirectResponse;
		}

		const founder = foundersMapping.get(params.founderID) ?? null;
		if (!founder) return redirectResponse;

		return {
			props: { founder },
		};
	};
</script>

<script lang="ts">
	export let founder: Founder;
</script>

<FounderPage {founder} />
