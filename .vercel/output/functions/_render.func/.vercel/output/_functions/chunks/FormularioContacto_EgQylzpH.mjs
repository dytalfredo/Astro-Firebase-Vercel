import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from './astro/server_BiHUW3TY.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$FormularioContacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormularioContacto;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex min-h-screen max-w-2xl mx-auto bg-white mt-10" id="formularioContacto"> <div class="mx-auto w-full"> <h2 class="font-semibold text-4xl capitalize text-gray-800 leading-[3rem]"> ${title} </h2> <p class="text-xl text-gray-700 text-center mt-6">
¡Estamos listos para ayudarte a conseguirlo!. Rellena y envia el
            siguiente formulario y un asesor te contactara en las próximas 24
            horas.
</p> ${renderComponent($$result, "getresponse-form", "getresponse-form", { "form-id": "10f036b6-0078-4b56-ba83-3c1379ece19d", "e": "1" })} <!-- <form
            method="POST"
            action="https://formsubmit.co/5f8ff96f196b4c185ae624fa43dab3ac"
            class="mt-10"
            id="formularioContacto"
        >
            <input type="text" name="_honey" style="display:none;" />
            <input type="hidden" name="_captcha" value="false" />

            <input
                type="hidden"
                name="_next"
                value="https://latamstudyvisa.com/envioexitoso/"
            />

            <div class="grid gap-6 sm:grid-cols-2">
                <div class="relative z-0">
                    <input
                        type="text"
                        name="Nombre"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-lime-900 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                    />
                    <label
                        class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-lime-900/30 peer-focus:dark:text-lime-900/20"
                        >Nombre</label
                    >
                </div>
                <div class="relative z-0">
                    <input
                        type="email"
                        name="Correo"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-lime-900 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                    />
                    <label
                        class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-lime-900/20 peer-focus:dark:lime-900/20"
                        >Correo</label
                    >
                </div>
                <div class="relative z-0 col-span-2">
                    <textarea
                        name="Mensaje"
                        rows="5"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-lime-900 focus:outline-none focus:ring-0"
                        placeholder=" "></textarea>
                    <label
                        class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-lime-900/20 peer-focus:dark:lime-900/20"
                        >Cuéntanos a donde quieres viajar y cual es tu objetivo
                        principal.</label
                    >
                </div>
            </div>

            <button
                id="button"
                class="text-sm block mt-4 font-semibold py-1 px-8 text-lime-50 bg-lime-900 mx-auto hover:text-lime-900 hover:bg-lime-500 border-solid border-2 border-lime-900 rounded-full shadow hover:shadow-md transition duration-300"
                >Enviar Mensaje</button
            >
        </form> --> </div> </div>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/AstroFirebase/src/components/FormularioContacto.astro", void 0);

export { $$FormularioContacto as $ };
