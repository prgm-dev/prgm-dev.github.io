export const foundersIdentifiers = [
	'alexandre',
	'sebastien',
	'tristan',
] as const;

export type FounderIdentifier = typeof foundersIdentifiers[number];
export interface Founder {
	identifier: FounderIdentifier;
	name: { first: string; last: string };
	social: {
		twitter?: string;
		linkedIn: string;
		github?: string;
		gitlab?: string;
		keybase?: string;
		iMessage?: {
			username: 'first.last' | string;
			domain?: 'icloud.com' | 'me.com';
		};
	};
	title: string;
	image: ({ gravatarHash: string } | { src: string }) & { alt?: string };
}

export function isValidFounderIdentifier(
	identifier: string
): identifier is FounderIdentifier {
	return (foundersIdentifiers as readonly string[]).includes(identifier);
}
