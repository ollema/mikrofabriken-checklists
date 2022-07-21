import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		target: 'esnext'
	},
	optimizeDeps: {
		exclude: ['tinro']
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$data: path.resolve('./src/data')
		}
	}
});
