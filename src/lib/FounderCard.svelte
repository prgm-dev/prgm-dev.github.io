<script lang="ts">
	import type { Founder } from '$/types';

	export let founder: Founder | null = null;

	const imageSrc: string =
		'src' in founder.image
			? founder.image.src
			: `https://www.gravatar.com/avatar/${founder.image.gravatarHash}?size=256`;
	const imageAlt: string =
		founder.image.alt ?? `Picture of ${founder.name.first}`;
</script>

{#if founder}
	<div
		class="rounded-lg w-full h-full bg-light-alt dark:bg-dark-alt p-4 shadow-lg dark:shadow-none"
	>
		<!-- Centered rounded image -->
		<div class="mx-auto w-3/4 rounded-full overflow-hidden border">
			<div class="aspect-w-1 aspect-h-1">
				<img src={imageSrc} alt={imageAlt} />
			</div>
		</div>

		<!-- Name & Title -->
		<div class="mt-3">
			<h1 class="text-center font-medium">
				{founder.name.first}
				<span class="small-caps">{founder.name.last}</span>
			</h1>
			<h2 class="text-center opacity-50">
				<span class="uppercase">{founder.title}</span>
			</h2>
		</div>
	</div>
{/if}
