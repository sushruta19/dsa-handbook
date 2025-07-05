// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sushruta19.github.io',
	base: 'dsa-handbook',
	integrations: [
		starlight({
			title: 'DSA Handbook',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sushruta19/dsa-handbook' }],
			sidebar: [
				{
					label: 'Graphs',
					autogenerate: { directory: 'graphs' },
				},
			],
		}),
	],
});
