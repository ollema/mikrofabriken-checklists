import adapter from '@sveltejs/adapter-auto';
import { Config } from '@sveltejs/kit';
import preprocess from 'svelte-preprocess';

const config: Config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
