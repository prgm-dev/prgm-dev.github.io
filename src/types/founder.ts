export interface Founder {
	identifier: 'alexandre' | 'sebastien' | 'tristan';
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
