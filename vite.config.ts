import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			allow: ['config.json']
		},
		watch: {
			ignored: [
				// ignore dotfiles to prevent watching nixpkgs
				/(^|[/\\])\../
			]
		}
	}
});
