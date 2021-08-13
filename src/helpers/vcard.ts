import { imageURLForFounder } from '$/globals/founders';
import type { Founder } from '$/types/founder';
import VCard from 'vcard-creator';

function getDataFromURL(url: string): Promise<string> {
	return fetch(url)
		.then((response) => response.blob())
		.then(
			(blob) =>
				new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onloadend = () => resolve(reader.result.toString());
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				})
		);
}

export type VCardT = VCard;
export async function generateVCard(founder: Founder): Promise<VCard> {
	const imageDataPromise = getDataFromURL(imageURLForFounder(founder, 512));

	const founderVCard = new VCard();
	founderVCard
		.addName(founder.name.last, founder.name.first)
		.addAddress(
			'Paris',
			undefined,
			undefined,
			'Paris',
			undefined,
			undefined,
			'France'
		)
		.addCompany('prgm.dev')
		.addJobtitle(founder.title)
		.addEmail(`${founder.identifier}@prgm.dev`, 'WORK')
		.addURL(`https://${founder.identifier}.prgm.dev/`, 'WORK');

	// Add Photo
	const urlEncodedPhotoDataFull = await imageDataPromise;
	// The URL-encoded data link contains two parts: the payload and a header.
	const urlParts = urlEncodedPhotoDataFull.split(',');
	if (urlParts.length === 2) {
		const [header, urlEncodedPhotoData] = urlParts;
		// Find the MIME Type from the header
		const matches = header.match(/image\/([^;]+)/);
		if (matches.length === 2) {
			const mimeType = matches[1].toUpperCase();
			founderVCard.addPhoto(urlEncodedPhotoData, mimeType);
		} else
			console.error(
				'Expected URL-encoded photo header to contain the MIME Type. Got:',
				{ header }
			);
	} else {
		console.error(
			'Expected exactly two parts in URL-encoded photo data. Got:',
			{ urlParts }
		);
	}

	return founderVCard;
}
