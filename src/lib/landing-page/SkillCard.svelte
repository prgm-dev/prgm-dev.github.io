<script context="module" lang="ts">
	/**
	 * This counter is incremented to generate a unique ID
	 * for each Skill Card
	 */
	let counter = 0;
</script>

<script lang="ts">
	/** Represents a unique ID bound for this instance of the component. */
	const componentID = `skill-card-${counter++}`;
</script>

<div
	class="w-full"
	aria-labelledby="{componentID}-title"
	aria-describedby="{componentID}-description"
>
	<div class="flex flex-row w-full space-x-1 items-center" role="presentation">
		<div class="w-1/6 flex-shrink-0" role="presentation">
			<div class="text-accent w-max mx-auto">
				<slot name="icon" />
			</div>
		</div>
		<h3 id="{componentID}-title" class="text-lg font-semibold col-span-5 flex-grow">
			<slot name="title" />
		</h3>
	</div>
	<div class="flex flex-row w-full space-x-1" role="presentation">
		<div class="w-1/6 flex-shrink-0" aria-hidden="true" role="presentation" />
		<p id="{componentID}-description" class="text-sm col-span-5"><slot /></p>
	</div>
</div>
