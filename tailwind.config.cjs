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
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: ['Roboto', 'sans-serif'],
			rounded: ['Brahma Rounded Bold', 'Roboto', 'sans-serif'],
		},
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
				// Palette: https://coolors.co/5ed394-1c2335-334061-eeeeee-ffffff
				accent: { DEFAULT: '#5ED394', dark: '#5ED394' },
				light: { DEFAULT: '#EEEEEE', alt: colors.white },
				dark: { DEFAULT: '#334061', alt: '#1C2335' },
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
