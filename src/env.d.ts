/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/server" />

interface ImportMetaEnv {
	readonly API_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	interface Window {
		toast: function
	}
}