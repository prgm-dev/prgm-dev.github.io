import { browser, prod } from '$app/env';
import Plausible from 'plausible-tracker';

/**
 * The domain to log on Plausible.
 * Might be different from the actual domain as this is simply an ID for Plausible.
 */
export const plausibleDomain = 'prgm.dev' as const;
/** The global Plausible instance */
export const plausible =
	prod && browser
		? Plausible({
				domain: plausibleDomain,
		  })
		: null;

/** Call this method to unregister Plausible overload of `history.pushState` */
export const cleanup = plausible?.enableAutoPageviews() ?? null;

if (!plausible) {
	console.warn('No Plausible instance created.', { prod, browser });
}

export default plausible;
