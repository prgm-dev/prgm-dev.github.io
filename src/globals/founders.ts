import type { Founder } from '$/types/founder';

export const alexandre: Founder = {
	identifier: 'alexandre',
	name: { first: 'Alexandre', last: 'Jouandin' },
	social: {
		linkedIn: 'alexandrejouandin',
		github: 'Allezxandre',
		gitlab: 'Allezxandre',
		keybase: 'allezxandre',
		iMessage: { username: 'first.last' },
	},
	title: 'CTO',
	image: { gravatarHash: 'daf8a0f2457da63e3c2e15cc2e4319e3' },
};

export const sebastien: Founder = {
	identifier: 'sebastien',
	name: { first: 'Sébastien', last: 'Ohleyer' },
	social: { linkedIn: 'sebastien-ohleyer' },
	title: 'CEO',
	image: { src: '/img/sebastien.jpg' },
};

export const tristan: Founder = {
	identifier: 'tristan',
	name: { first: 'Tristan', last: 'Stérin' },
	social: {
		linkedIn: 'tristan-stérin-4b37b9107',
		github: 'tcosmo',
	},
	title: 'COO',
	image: { src: '/img/tristan-512.jpg' },
};

export const founders: Founder[] = [sebastien, alexandre, tristan];
export const foundersMapping = new Map(founders.map((f) => [f.identifier, f]));

// Helper functions

/**
 *	Generate an image URL from a founder object.
 *
 * @param founder The founder for which the image URL should be generated
 * @param size For gravatar images, what size should we link to.
 * @param forceAbsoluteURL If `true`, the returned URL will be absolute.
 * @returns A URL to the image, that can be as `src` in an `<img>` element.
 */
export function imageURLForFounder(
	founder: Pick<Founder, 'image'>,
	size = 1024,
	forceAbsoluteURL = false
): string {
	if ('src' in founder.image)
		return forceAbsoluteURL
			? `https://prgm.dev${founder.image.src}`
			: founder.image.src;
	else
		return `https://www.gravatar.com/avatar/${founder.image.gravatarHash}?size=${size}`;
}
