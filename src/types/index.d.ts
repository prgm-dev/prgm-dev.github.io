export interface Founder {
	name: { first: string, last: string }
	title: string
	image: ({ gravatarHash: string } | { src: string }) & { alt?: string }
}
