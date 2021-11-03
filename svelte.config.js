import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import { mdsvexConfig } from './mdsvex.config.js';

/** @type {function(): import('vite').UserConfig} */
const viteConfig = () => ({
	resolve: {
		alias: {
			$: resolve('./src'),
		},
	},
	plugins: [WindiCSS({ transformCSS: 'pre' })],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		// Use a trailing slash as GitHub pages
		// redirects `/abc` to `/abc/` if it's a folder.
		trailingSlash: 'always',
		vite: viteConfig,
	},
};

export default config;
