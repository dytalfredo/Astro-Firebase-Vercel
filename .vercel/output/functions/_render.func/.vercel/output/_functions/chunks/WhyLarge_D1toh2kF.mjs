import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as createAstro } from './astro/server_BiHUW3TY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                           */

const $$Astro = createAstro();
const $$WhyLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyLarge;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="p-8 mt-10 max-w-3xl mx-auto bg-lime-400 text-gray-950 rounded-lg shadow-lg" id="siguiente-seccion" data-astro-cid-ajzijoyr> <h2 class="text-4xl text-gray-950 font-semibold text-center mb-4 tracking-wider" data-astro-cid-ajzijoyr> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/AstroFirebase/src/components/WhyLarge.astro", void 0);

export { $$WhyLarge as $ };
