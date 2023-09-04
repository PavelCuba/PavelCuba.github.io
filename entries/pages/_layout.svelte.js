import { c as create_ssr_component } from "../../chunks/ssr.js";
import hljs from "highlight.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const app = "";
const githubDark = "";
const storeHighlightJs = writable(void 0);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  storeHighlightJs.set(hljs);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
