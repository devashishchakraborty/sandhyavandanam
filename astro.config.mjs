// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sandhyā Library',
			sidebar: [
				{
					label: 'Regions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bengal', slug: 'regions/bengal' },
					],
				},
				{
					label: 'Veda',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
