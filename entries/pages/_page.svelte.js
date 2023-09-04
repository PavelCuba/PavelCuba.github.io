import { c as create_ssr_component, b as add_attribute, e as escape, d as compute_slots, n as null_to_empty, f as each, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "swiper";
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const logo = "/_app/immutable/assets/logo.a53bd17e.svg";
const navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'nav.svelte-jzuaus.svelte-jzuaus{position:fixed;background-color:rgba(0, 0, 0, 0.5);font-family:"Helvetica Neue", "Helvetica", "Arial", sans-serif;height:80px;width:100%;nav-down:auto;z-index:100}.inner.svelte-jzuaus.svelte-jzuaus{max-width:1080px;margin:auto;box-sizing:border-box;display:flex;align-items:center;height:100%;z-index:1000}.logo.svelte-jzuaus.svelte-jzuaus{margin-right:auto}.mobile-icon.svelte-jzuaus.svelte-jzuaus{width:25px;height:14px;position:relative;cursor:pointer}.sticky.svelte-jzuaus.svelte-jzuaus{position:fixed;top:0;width:100%}.navbar-list.svelte-jzuaus.svelte-jzuaus{display:flex;margin:0;padding:0;list-style:none}.navbar-list.svelte-jzuaus li.svelte-jzuaus{margin-right:20px;position:relative}.navbar-list.svelte-jzuaus li.svelte-jzuaus:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:rgb(var(--color-secondary-500) / 1)}.navbar-list.svelte-jzuaus a.svelte-jzuaus{color:#fff;text-decoration:none;font-size:24px;padding:8px 16px}@media only screen and (min-width: 767px){.mobile-icon.svelte-jzuaus.svelte-jzuaus{display:none}.navbar-list.svelte-jzuaus.svelte-jzuaus{display:flex;padding:0}.navbar-list.svelte-jzuaus a.svelte-jzuaus{display:inline-flex}}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeLink = "";
  const navItems = [
    { label: "O nás", href: "#about" },
    // Přidáme ID sekce do href
    {
      label: "Naše služby",
      href: "#services"
    },
    { label: "Ceník", href: "#pricing" },
    { label: "Kontakty", href: "#contact" }
  ];
  $$result.css.add(css$1);
  return `<nav class="navbar svelte-jzuaus"><div class="inner svelte-jzuaus"><div class="logo svelte-jzuaus" data-svelte-h="svelte-1e1xxr6"><a href="http://bclogistics.budouciweb.cz/" target="_blank"><img${add_attribute("src", logo, 0)} alt="Logo"></a></div> <ul class="${escape(null_to_empty(`navbar-list${""}`), true) + " svelte-jzuaus"}">${each(navItems, (item) => {
    return `<li class="svelte-jzuaus"><a class="${escape(
      null_to_empty(item.href === "#" + activeLink ? "variant-filled-secondary rounded-t" : ""),
      true
    ) + " svelte-jzuaus"}"${add_attribute("href", item.href, 0)}>${escape(item.label)}</a> </li>`;
  })}</ul></div> </nav>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-56p9kf{display:flex;flex-direction:column;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(AppShell, "AppShell").$$render($$result, { regionPage: "relative" }, {}, {
    pageFooter: () => {
      return ` <section id="Footer" style="height: 300px" class="svelte-56p9kf" data-svelte-h="svelte-184h9f6"><h1>Footer</h1> <p>Text a obsah pro sekci &quot;Test&quot;.</p></section> `;
    },
    header: () => {
      return `<div id="nav">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div> `;
    },
    default: () => {
      return `<section id="about" style="height: 880px" class="svelte-56p9kf" data-svelte-h="svelte-1lh3y73"><h1 class="h1 py-20">O nás</h1> <p>Text a obsah pro sekci &quot;O nás&quot;.</p> <h2 class="h2">Vítejte v BC Logistics - Vašem spolehlivém partnerovi v oblasti servisu vozidel v Otrokovicích!</h2> <p class="text-base py-2">BC Logistics je společnost, která se zabývá servisem vozidel. Naším cílem je poskytovat kvalitní služby za přijatelné ceny. Využíváme moderní technologie a pracujeme s kvalitními materiály. Naši zaměstnanci jsou školeni a pravidelně se vzdělávají. Věříme, že naše služby budou pro Vás přínosem a budete se k nám rádi vracet.</p> <p><strong>Naše hodnoty:</strong></p> <p>Kvalita: Jsme oddáni poskytování servisu nejvyšší kvality. Naši zkušení technici používají nejmodernější technologie a metody, aby vaše vozidlo bylo v optimálním stavu.
			
			Spolehlivost: Držíme si naši slovo. Můžete se na nás spolehnout, že vám poskytneme včasný a efektivní servis.
			
			Zákaznická orientace: Zákazník je pro nás na prvním místě. Poskytujeme personalizovaný servis, který vyhovuje vašim individuálním potřebám.</p> <p>Proč si vybrat BC Logistics pro servis vašeho vozidla v Otrokovicích?

			Zkušenost: S více než dvacetiletou zkušeností jsme odborníky na servis různých značek a modelů vozidel.
			
			Moderní vybavení: Naše moderní zařízení a technologie umožňují rychlý a efektivní servis.
			
			Dostupnost: Jsme zde pro vás, kdykoliv potřebujete servis.
			
			Transparentnost: U nás budete vždy vědět, co se s vaším vozidlem děje a kolik to bude stát.</p></section> <section id="services" style="height: 880px" class="svelte-56p9kf" data-svelte-h="svelte-noety3"><h1 class="h1 py-20">Naše služby</h1> <div class="flex"><div class="card w-80 h-auto p-4 mr-4 variant-ghost-primary"><header class="card-header flex justify-center bg-initial card">Obrázek 1</header> <section class="block svelte-56p9kf"><h3 class="h3">Opravy vozidel</h3> <article><p class="text-base py-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis hendrerit ante. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></article></section></div> <div class="card w-80 p-4 mr-4 bg-primary-500"><header class="card-header flex justify-center">Obrázek 2</header> <section class="svelte-56p9kf"><h3 class="h3">Přezutí pneumatik</h3> <article><p class="text-base py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis hendrerit ante. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec iaculis gravida nulla. Duis condimentum augue id magna semper rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Integer malesuada. Fusce suscipit libero eget elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.</p></article></section> <footer class="card-footer">(footer)</footer></div> <div class="card w-80 p-4 mr-4"><header class="card-header flex justify-center">Obrázek 3</header> <section class="svelte-56p9kf"><h3 class="h3">Servis vozidel</h3> <article class="text-base py-2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis hendrerit ante. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec iaculis gravida nulla. Duis condimentum augue id magna semper rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Integer malesuada. Fusce suscipit libero eget elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.</p></article></section> <footer class="card-footer">(footer)</footer></div> <div class="card w-80 p-4"><header class="card-header flex justify-center">Obrázek 4</header> <section class="svelte-56p9kf"><h3 class="h3">Další služby</h3> <article class="text-base py-2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis hendrerit ante. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec iaculis gravida nulla. Duis condimentum augue id magna semper rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Integer malesuada. Fusce suscipit libero eget elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.</p></article></section> <footer class="card-footer">(footer)</footer></div></div></section> <section id="pricing" style="height: 880px" class="svelte-56p9kf" data-svelte-h="svelte-nzf9jt"><h1 class="h1 py-20">Ceník</h1> <p>Text a obsah pro sekci &quot;Ceník&quot;.</p></section> <section id="contact" style="height: 880px" class="svelte-56p9kf" data-svelte-h="svelte-1x54g9v"><h1 class="h1 py-20">Kontakty</h1> <p>Text a obsah pro sekci &quot;Kontakty&quot;.</p></section> ${slots.default ? slots.default({}) : ``} `;
    }
  })}`;
});
export {
  Page as default
};
