

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f9c9fc35.js","_app/immutable/chunks/scheduler.0abb119d.js","_app/immutable/chunks/index.5567acec.js","_app/immutable/chunks/singletons.2eef05b6.js","_app/immutable/chunks/index.e0fd5f60.js"];
export const stylesheets = [];
export const fonts = [];
