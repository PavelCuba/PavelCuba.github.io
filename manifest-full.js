export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e0c8abd2.js","app":"_app/immutable/entry/app.54b6933e.js","imports":["_app/immutable/entry/start.e0c8abd2.js","_app/immutable/chunks/scheduler.0abb119d.js","_app/immutable/chunks/singletons.2eef05b6.js","_app/immutable/chunks/index.e0fd5f60.js","_app/immutable/entry/app.54b6933e.js","_app/immutable/chunks/scheduler.0abb119d.js","_app/immutable/chunks/index.5567acec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
