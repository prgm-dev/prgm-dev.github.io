const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				),
			],
		},
	},
	theme: {
		screens: {
			xxs: '350px',
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			screens: {
				hoverable: { raw: '(hover: hover)' },
				// => @media (orientation: portrait) { ... }
			},
			colors: {
				// Palette: https://coolors.co/191e24-2e3238-eeeeee-b53389
				accent: { DEFAULT: colors.purple[400], dark: colors.purple[500] },
				light: { DEFAULT: '#EEEEEE', alt: colors.white },
				dark: { DEFAULT: '#191E24', alt: '#2E3238' },
			},
		},
	},
	darkMode: 'media',
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
};

module.exports = config;
