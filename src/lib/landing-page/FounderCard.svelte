<script lang="ts">
	import type { Founder } from '$/types/founder';

	export let founder: Founder | null = null;

	const imageSrc: string =
		'src' in founder.image
			? founder.image.src
			: `https://www.gravatar.com/avatar/${founder.image.gravatarHash}?size=384`;
	const imageAlt: string = founder.image.alt ?? founder.name.first;
</script>

{#if founder}
	<a
		href="/{founder.identifier}"
		aria-labelledby="founderLabel{founder.name.last}"
		aria-describedby="founderDescription{founder.name.last}"
		class="rounded-lg w-full h-full bg-light-alt dark:bg-dark-alt p-4 shadow-lg dark:shadow-none"
	>
		<!-- Centered rounded image -->
		<div
			role="presentation"
			class="mx-auto w-3/4 rounded-full overflow-hidden border dark:border-dark"
		>
			<div role="presentation" class="aspect-w-1 aspect-h-1">
				<img src={imageSrc} alt={imageAlt} />
			</div>
		</div>

		<!-- Name & Title -->
		<div class="mt-3">
			<h1 id="founderLabel{founder.name.last}" class="text-center font-medium">
				{founder.name.first}
				<span class="small-caps">{founder.name.last}</span>
			</h1>
			<h2
				id="founderDescription{founder.name.last}"
				class="text-center opacity-50"
			>
				<span class="uppercase">{founder.title}</span>
			</h2>
		</div>
	</a>
{/if}
