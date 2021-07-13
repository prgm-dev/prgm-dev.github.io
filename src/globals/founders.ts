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
	social: { linkedIn: 'tristansterin' },
	title: 'COO',
	image: { src: '/img/tristan-512.jpg' },
};

export const founders: Founder[] = [sebastien, alexandre, tristan];
export const foundersMapping = new Map(founders.map((f) => [f.identifier, f]));
