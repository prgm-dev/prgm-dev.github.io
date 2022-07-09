import DevorLogoSrc from '$lib/assets/images/partners/devor-logo-nobg.svg';
import PanoramaLogoSrc from '$lib/assets/images/partners/panorama-logo-nobg.svg';
import Logo321FoundedSrc from '$lib/assets/images/partners/321-founded.svg';

export const partners: Partner[] = [
	{
		name: 'Devor',
		href: 'https://devor.me',
		img: {
			src: DevorLogoSrc,
			alt: 'Devor Logo',
		},
		backgroundCssColor: '#F7EEE7',
	},
	{
		name: 'Panorama Group',
		href: 'https://panorama.group',
		img: {
			src: PanoramaLogoSrc,
			alt: 'Panorama Logo',
		},
		backgroundCssColor: '#EAEEF6',
	},
	{
		name: '321 Founded',
		href: 'https://321founded.com',
		img: {
			src: Logo321FoundedSrc,
			alt: '321 Founded Logo',
		},
		backgroundCssColor: '#fff',
	},
];

export interface Partner {
	name: string;
	href: string;
	img: {
		src: string;
		alt: string;
	};
	backgroundCssColor: string;
}
