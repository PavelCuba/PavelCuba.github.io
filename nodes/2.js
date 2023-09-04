

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4241f8f4.js","_app/immutable/chunks/scheduler.0abb119d.js","_app/immutable/chunks/index.5567acec.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.4937fcc4.js","_app/immutable/chunks/index.e0fd5f60.js"];
export const stylesheets = ["_app/immutable/assets/2.0ea178e3.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
