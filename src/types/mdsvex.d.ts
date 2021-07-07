export interface MetadataT {
	title?: string
	longTitle?: string
	dateCreated?: string
	dateLastUpdated?: string
	description?: string
	tags?: string[]
}

declare module "*.svelte.md" {
	export const metadata: MetadataT
}
