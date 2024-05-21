import { getContext, setContext } from 'svelte';
import { loadConfig } from './load';
import type { Config } from './types';

export * from './types';

export function setConfig() {
	setContext('config', loadConfig());
}

export function getConfig() {
	return getContext<Config>('config');
}
