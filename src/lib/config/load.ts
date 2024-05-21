import type { Config } from './types';

export function loadConfig(): Config {
	const glob = import.meta.glob('/config.json', { eager: true, import: 'default' });
	console.log(glob);

	return glob['/config.json'] as Config;
}
