const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

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
				)
			]
		}
	},
	theme: {
		extend: {
			colors: {
				// Palette: https://coolors.co/191e24-2e3238-eeeeee-b53389
				accent: '#b53389',
				light: { DEFAULT: '#EEEEEE' },
				dark: { DEFAULT: '#191E24', alt: '#2E3238' }
			}
		}
	},
	variants: {
		extend: {}
	},
	darkMode: 'media',
	plugins: []
};

module.exports = config;
