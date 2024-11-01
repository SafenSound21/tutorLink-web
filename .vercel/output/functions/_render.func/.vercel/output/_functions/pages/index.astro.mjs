/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderHead, b as renderSlot, f as createAstro, m as maybeRenderHead, g as addAttribute, h as createTransitionScope, i as renderComponent, F as Fragment } from '../chunks/astro/server_Cg_PgxdK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/layouts/Layout.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.4972 63.489H11.7926V65.2381H20.4972V63.489Z" fill="white"></path> <path d="M18.5426 65.863H9.83795V67.6121H18.5426V65.863Z" fill="white"></path> <path d="M20.4972 68.2371H11.7926V69.9861H20.4972V68.2371Z" fill="white"></path> <path d="M16.812 56.525V43.1787H20.4602V40.8972H10.7444V43.1787H14.4194V56.525H16.812Z" fill="white"></path> <path d="M26.5852 43.5806H28.7028C28.6835 42.9812 28.625 42.3836 28.5278 41.7917C28.1847 39.653 27.3547 37.6217 26.1019 35.8547C24.7648 33.8649 23.1232 32.413 21.3306 31.4565C19.5187 30.4891 17.4928 29.9925 15.4389 30.0121C13.425 29.9917 11.4372 30.4688 9.65187 31.401C9.62502 31.4149 9.59724 31.4278 9.57039 31.4427C7.76669 32.3982 6.11761 33.8501 4.7741 35.8528C3.52113 37.6197 2.6914 39.6511 2.3491 41.7899C1.81576 45.0695 2.42687 48.5149 4.37873 51.2732C5.69539 53.163 7.53613 54.6482 8.92502 56.4714C9.18313 56.8064 9.42209 57.1557 9.64076 57.5177C11.4815 61.2417 11.4815 62.3723 12.2871 62.6575C13.5834 62.6001 14.6111 62.6038 15.4352 62.6288C16.2611 62.6038 17.2917 62.6001 18.588 62.6575C19.3982 62.3723 19.3926 61.2417 21.2343 57.5214C21.4521 57.1622 21.6892 56.8151 21.9445 56.4816C22.4458 55.8352 22.9825 55.217 23.5519 54.6297C23.0188 54.1653 22.5902 53.5932 22.2945 52.951C20.4797 55.0001 18.6593 57.0473 17.8584 59.7445C17.7797 60.0084 17.6204 60.3001 17.3639 60.4186C16.9935 60.5964 16.5685 60.5223 16.1741 60.5028C15.5084 60.4714 14.8417 60.5306 14.1732 60.5306C14.0748 60.5333 13.9763 60.528 13.8787 60.5149C13.8301 60.5088 13.7819 60.4998 13.7343 60.488C13.6886 60.469 13.6411 60.4545 13.5926 60.4445C13.4083 60.3756 13.2538 60.2446 13.1556 60.0741C13.0983 59.9704 13.0506 59.8616 13.013 59.7491C11.7435 55.4788 7.92039 52.838 5.61021 49.2408C1.3065 39.6769 8.27317 32.5001 15.4371 32.2399C21.1009 32.4454 26.6389 36.9714 26.5852 43.5806Z" fill="white"></path> <path d="M31.8778 54.5074H29.5426V53.2574C29.3019 53.8453 28.3982 54.6731 26.8472 54.6731C24.6176 54.6731 22.9009 52.9564 22.9009 50.4138V44.7222H25.25V50.3703C25.25 51.6953 26.1083 52.5842 27.3889 52.5842C28.6695 52.5842 29.5278 51.6953 29.5278 50.3703V44.7222H31.8778V54.5074Z" fill="white"></path> <path d="M35.1935 46.8259H33.3861V44.7221H35.1935V42.4629H37.5426V44.7221H39.3352V46.8305H37.5426V54.5157H35.1935V46.8259Z" fill="white"></path> <path d="M40.2408 49.6129C40.2408 46.5999 42.3491 44.5518 45.3769 44.5518C48.4047 44.5518 50.513 46.5999 50.513 49.6129C50.513 52.6258 48.4037 54.673 45.3769 54.673C42.35 54.673 40.2408 52.6397 40.2408 49.6129ZM45.3769 52.5499C46.988 52.5499 48.1176 51.3749 48.1176 49.6129C48.1176 47.8656 46.988 46.6749 45.3769 46.6749C43.7797 46.6749 42.651 47.8656 42.651 49.6129C42.651 51.3749 43.7797 52.5499 45.3769 52.5499Z" fill="white"></path> <path d="M52.3222 44.7221H54.637V46.1231C54.8935 45.5675 55.7213 44.6471 57.0768 44.5564V46.936C55.6157 46.936 54.6694 47.9157 54.6694 49.4212V54.5138H52.3222V44.7221Z" fill="white"></path> <path d="M58.9602 42.4583H61.3102V52.399H67.4852V54.5073H58.9602V42.4583Z" fill="#01B161"></path> <path d="M68.9935 42.4583H71.3435V44.5666H68.9935V42.4583ZM68.9935 46.0129H71.3435V54.5073H68.9935V46.0129Z" fill="#01B161"></path> <path d="M73.7537 44.7221H76.0889V45.9721C76.3297 45.3851 77.2334 44.5564 78.7843 44.5564C81.0139 44.5564 82.7306 46.2731 82.7306 48.8157V54.5092H80.3815V48.861C80.3815 47.536 79.5232 46.6471 78.2426 46.6471C76.9621 46.6471 76.1037 47.536 76.1037 48.861V54.5092H73.7537V44.7221Z" fill="#01B161"></path> <path d="M84.8416 42.4583H87.1916V48.5879L90.5805 44.7175H93.5027L89.3907 49.3564L93.8036 54.5073H90.8666L87.1916 50.1999V54.5073H84.8416V42.4583Z" fill="#01B161"></path> <path d="M24.7731 57.5259C25.2463 57.5259 25.4889 57.8083 25.4889 58.3027V58.3999H25.0259V58.2722C25.0259 58.0509 24.938 57.9666 24.7833 57.9666C24.6287 57.9666 24.5398 58.0509 24.5398 58.2722C24.5398 58.9074 25.4898 59.0268 25.4898 59.9101C25.4898 60.4046 25.2426 60.687 24.7657 60.687C24.2889 60.687 24.0417 60.4092 24.0417 59.9101V59.725H24.5V59.9453C24.5 60.1657 24.5972 60.2453 24.7518 60.2453C24.9065 60.2453 25.0037 60.1657 25.0037 59.9453C25.0037 59.3092 24.0546 59.1907 24.0546 58.3074C24.0583 57.8083 24.3009 57.5259 24.7731 57.5259Z" fill="white"></path> <path d="M27.4445 59.499V59.9074C27.4445 60.4018 27.1972 60.6842 26.7204 60.6842C26.2435 60.6842 25.9963 60.4064 25.9963 59.9074V58.3027C25.9963 57.8083 26.2435 57.5259 26.7204 57.5259C27.1972 57.5259 27.4445 57.8083 27.4445 58.3027V58.6027H26.9815V58.2722C26.9815 58.0509 26.8889 57.9666 26.7306 57.9666C26.5722 57.9666 26.4787 58.0509 26.4787 58.2722V59.9388C26.4787 60.1592 26.5759 60.2388 26.7306 60.2388C26.8852 60.2388 26.9815 60.1592 26.9815 59.9388V59.4972L27.4445 59.499Z" fill="white"></path> <path d="M28.4917 60.6481H28.0056V57.561H28.4917V58.8888H29.0472V57.5647H29.537V60.6481H29.0426V59.3268H28.487L28.4917 60.6481Z" fill="white"></path> <path d="M30.6417 58.8629H31.3083V59.3046H30.6417V60.2101H31.4815V60.6481H30.1555V57.561H31.4815V58.0027H30.6426L30.6417 58.8629Z" fill="white"></path> <path d="M32.0454 57.561H32.8139C33.2991 57.561 33.538 57.8305 33.538 58.3249V59.8879C33.538 60.3823 33.2991 60.6518 32.8139 60.6518H32.0454V57.561ZM32.5315 58.0027V60.2101H32.8093C32.963 60.2101 33.0556 60.1305 33.0556 59.9101V58.3027C33.0556 58.0814 32.963 58.0027 32.8093 58.0027H32.5315Z" fill="white"></path> <path d="M34.5759 57.561V59.9453C34.5759 60.1657 34.6732 60.2453 34.8278 60.2453C34.9824 60.2453 35.0787 60.1657 35.0787 59.9453V57.561H35.5417V59.9138C35.5417 60.4083 35.2945 60.6916 34.8176 60.6916C34.3408 60.6916 34.0935 60.4083 34.0935 59.9138V57.561H34.5759Z" fill="white"></path> <path d="M36.1342 57.561H36.6204V60.2101H37.4194V60.6481H36.1342V57.561Z" fill="white"></path> <path d="M38.3815 58.8629H39.0482V59.3046H38.3815V60.2101H39.2204V60.6481H37.8963V57.561H39.2204V58.0027H38.3815V58.8629Z" fill="white"></path> <path d="M41.813 59.0046L41.6361 60.6481H40.9694L40.625 57.5574H41.0972L41.3574 60L41.5917 57.5629H42.0602L42.3028 60.0176L42.5546 57.5629H42.9778L42.6333 60.6481H41.9852L41.813 59.0046Z" fill="white"></path> <path d="M43.4861 57.561H43.9713V60.6481H43.4861V57.561Z" fill="white"></path> <path d="M44.4445 57.561H45.9463V58.0027H45.438V60.6481H44.9528V58.0027H44.4445V57.561Z" fill="white"></path> <path d="M46.912 60.6481H46.4268V57.561H46.912V58.8888H47.4676V57.5647H47.9629V60.6481H47.4685V59.3268H46.9129L46.912 60.6481Z" fill="white"></path> <path d="M50.012 58.8629H50.6787V59.3046H50.012V60.2101H50.8509V60.6481H49.5259V57.561H50.8509V58.0027H50.012V58.8629Z" fill="white"></path> <path d="M52.9879 60.6481H52.4999L52.4156 60.087H51.8193L51.736 60.6481H51.2897L51.7842 57.5574H52.4953L52.9879 60.6481ZM51.8767 59.6676H52.3443L52.111 58.1046L51.8767 59.6676Z" fill="white"></path> <path d="M54.1315 57.5259C54.6037 57.5259 54.8463 57.8083 54.8463 58.3027V58.3999H54.3833V58.2722C54.3833 58.0509 54.2907 57.9666 54.1407 57.9666C53.9907 57.9666 53.8981 58.0509 53.8981 58.2722C53.8981 58.9074 54.8472 59.0268 54.8472 59.9101C54.8472 60.4046 54.6 60.687 54.1232 60.687C53.6463 60.687 53.3991 60.4092 53.3991 59.9101V59.725H53.862V59.9453C53.862 60.1657 53.9546 60.2453 54.1139 60.2453C54.2731 60.2453 54.3657 60.1657 54.3657 59.9453C54.3657 59.3092 53.4167 59.1907 53.4167 58.3074C53.4167 57.8083 53.6593 57.5259 54.1315 57.5259Z" fill="white"></path> <path d="M55.8796 58.8629H56.5463V59.3046H55.8796V60.2101H56.7185V60.6481H55.3944V57.561H56.7185V58.0027H55.8796V58.8629Z" fill="white"></path> <path d="M57.2842 60.648V60.1851H57.7518V60.6045L57.5398 61.0943H57.3416L57.4694 60.6536L57.2842 60.648Z" fill="white"></path> <path d="M59.8056 58.8629H60.4723V59.3046H59.8056V60.2101H60.6482V60.6481H59.3195V57.561H60.6482V58.0027H59.8056V58.8629Z" fill="white"></path> <path d="M61.2093 57.561H61.9778C62.463 57.561 62.7019 57.8305 62.7019 58.3249V59.8879C62.7019 60.3823 62.463 60.6518 61.9778 60.6518H61.2093V57.561ZM61.6954 58.0027V60.2101H61.9732C62.1278 60.2101 62.2204 60.1305 62.2204 59.9101V58.3027C62.2204 58.0814 62.1278 58.0027 61.9732 58.0027H61.6954Z" fill="white"></path> <path d="M63.7389 57.561V59.9453C63.7389 60.1657 63.8315 60.2453 63.9907 60.2453C64.15 60.2453 64.2426 60.1657 64.2426 59.9453V57.561H64.7056V59.9138C64.7056 60.4083 64.4583 60.6916 63.9815 60.6916C63.5046 60.6916 63.2574 60.4083 63.2574 59.9138V57.561H63.7389Z" fill="white"></path> <path d="M66.7065 59.499V59.9074C66.7065 60.4018 66.4593 60.6842 65.9824 60.6842C65.5056 60.6842 65.2583 60.4064 65.2583 59.9074V58.3027C65.2583 57.8083 65.5056 57.5259 65.9824 57.5259C66.4593 57.5259 66.7065 57.8083 66.7065 58.3027V58.6027H66.2435V58.2722C66.2435 58.0509 66.1463 57.9666 65.9917 57.9666C65.837 57.9666 65.7407 58.0509 65.7407 58.2722V59.9388C65.7407 60.1592 65.838 60.2388 65.9917 60.2388C66.1454 60.2388 66.2435 60.1592 66.2435 59.9388V59.4972L66.7065 59.499Z" fill="white"></path> <path d="M68.8389 60.6481H68.3491L68.2658 60.087H67.6695L67.5852 60.6481H67.1389L67.6343 57.5574H68.3445L68.8389 60.6481ZM67.7278 59.6676H68.1963L67.963 58.1083L67.7278 59.6676Z" fill="white"></path> <path d="M69.188 57.561H70.6889V58.0027H70.1852V60.6481H69.6991V58.0027H69.1917L69.188 57.561Z" fill="white"></path> <path d="M71.6518 58.8629H72.3148V59.3046H71.6481V60.2101H72.487V60.6481H71.1666V57.561H72.4907V58.0027H71.6518V58.8629Z" fill="white"></path> <path d="M75.0825 59.0046L74.9075 60.6481H74.2399L73.8954 57.5574H74.3686L74.6297 60L74.8639 57.5629H75.3269L75.5695 60.0176L75.8213 57.5629H76.2454L75.9038 60.6481H75.2556L75.0825 59.0046Z" fill="white"></path> <path d="M76.7592 57.561H77.2444V60.6481H76.7592V57.561Z" fill="white"></path> <path d="M77.7185 57.561H79.2194V58.0027H78.712V60.6481H78.2259V58.0027H77.7185V57.561Z" fill="white"></path> <path d="M80.1853 60.6481H79.7001V57.561H80.1853V58.8888H80.7408V57.5647H81.2353V60.6481H80.7408V59.3268H80.1853V60.6481Z" fill="white"></path> <path d="M82.7963 57.561H83.2824V60.6481H82.7963V57.561Z" fill="white"></path> <path d="M84.9287 59.7555L85.2602 57.561H85.9361V60.6481H85.4731V58.4351L85.1407 60.6481H84.6778L84.3157 58.462V60.6481H83.8917V57.561H84.5676L84.9287 59.7555Z" fill="white"></path> <path d="M87.9926 58.3249V58.7268C87.9926 59.2212 87.7546 59.4907 87.2694 59.4907H87.037V60.6481H86.5509V57.561H87.2666C87.7546 57.561 87.9926 57.8305 87.9926 58.3249ZM87.037 58.0027V59.049H87.2666C87.4203 59.049 87.5046 58.9777 87.5046 58.7573V58.2944C87.5046 58.074 87.4203 58.0036 87.2666 58.0036L87.037 58.0027Z" fill="white"></path> <path d="M90.0196 60.6482H89.5297L89.4446 60.0926H88.8492L88.7649 60.6537H88.3186L88.8131 57.563H89.5242L90.0196 60.6482ZM88.9084 59.6676H89.377L89.1427 58.1047L88.9084 59.6676Z" fill="white"></path> <path d="M91.9184 59.499V59.9074C91.9184 60.4018 91.6712 60.6842 91.1944 60.6842C90.7175 60.6842 90.4703 60.4064 90.4703 59.9074V58.3027C90.4703 57.8083 90.7175 57.5259 91.1944 57.5259C91.6712 57.5259 91.9184 57.8083 91.9184 58.3027V58.6027H91.4555V58.2722C91.4555 58.0509 91.3629 57.9666 91.2036 57.9666C91.0444 57.9666 90.9527 58.0509 90.9527 58.2722V59.9388C90.9527 60.1592 91.0453 60.2388 91.2036 60.2388C91.362 60.2388 91.4555 60.1592 91.4555 59.9388V59.4972L91.9184 59.499Z" fill="white"></path> <path d="M92.3379 57.561H93.8388V58.0027H93.3333V60.6481H92.8471V58.0027H92.3397L92.3379 57.561Z" fill="white"></path> <path d="M92.7593 40.675H90.2824V43.1519H92.7593V40.675Z" fill="#01B161"></path> <path d="M97.8343 40.1167H94.289V43.6621H97.8343V40.1167Z" fill="#01B161"></path> <path d="M93.8028 40.533H92.0546V42.2811H93.8028V40.533Z" fill="#01B161"></path> <path d="M96.1833 41.1824H94.9203V42.4453H96.1833V41.1824Z" fill="#01B161"></path> </svg>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Beneficios", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Sobre nosotros", href: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="h-16 text-white p-8 py-12" data-astro-cid-5ql2mvdm${addAttribute(createTransitionScope($$result, "kcdzbpm2"), "data-astro-transition-persist")}> <nav class="group flex h-full w-full items-center justify-between mx-auto md:max-w-[1060px]" id="navPrincipal" data-astro-cid-5ql2mvdm> <div class="flex items-center gap-14" data-astro-cid-5ql2mvdm> <div class="text-2xl font-bold" data-astro-cid-5ql2mvdm> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-5ql2mvdm": true })} </div> <div class="hidden md:flex gap-12" data-astro-cid-5ql2mvdm> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-white text-base font-light transition duration-300 ease-in-out hover:text-green-500" data-astro-cid-5ql2mvdm>${link.name}</a>`)} </div> </div> <div class="md:hidden" data-astro-cid-5ql2mvdm> <button id="menuButton" class="focus:outline-none flex items-center" data-astro-cid-5ql2mvdm> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5ql2mvdm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-5ql2mvdm></path> </svg> </button> </div> <div class="hidden md:block" data-astro-cid-5ql2mvdm> <button class="bg-white text-green-600 font-bold py-2 px-6 rounded transition duration-300 ease-in-out hover:text-white hover:bg-green-600" data-astro-cid-5ql2mvdm>
Contáctanos
</button> </div> <div class="fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto gradient px-8 py-4 lg:hidden" id="menuMobileContent" data-astro-cid-5ql2mvdm> <aside class="flex min-h-16 w-full items-center justify-between" data-astro-cid-5ql2mvdm> <span class="text-lg font-semibold text-primary" data-astro-cid-5ql2mvdm>Menú</span> <button id="innerMenuButton" class="focus:outline-none" data-astro-cid-5ql2mvdm> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5ql2mvdm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5ql2mvdm></path> </svg> </button> </aside> <nav class="flex w-full flex-col items-center gap-5" data-astro-cid-5ql2mvdm> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-5ql2mvdm> ${navLinks.map((link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5ql2mvdm": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="hover:text-gray-400 relative flex flex-col items-center justify-center gap-2 text-xl capitalize" data-astro-cid-5ql2mvdm>${link.name}</a> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-5ql2mvdm> ` })}`)} </nav> </div> </nav> </header>  `;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Header.astro", "self");

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col lg:flex-row items-center text-white p-8 pt-0"> <div class="md:flex max-w-xl lg:mb-0 md:max-w-[1060px] mx-auto w-full justify-between"> <div class="md:max-w-[600px] mt-10 md:mt-40 flex flex-col items-center gap-6 text-center md:text-left md:items-start"> <h1 class="text-4xl lg:text-5xl font-bold mb-4">Simplifica la <span class="text-[#01b161] md:block md:mt-4">gestión de tutorías</span></h1> <p class="mb-6 text-lg">
Una herramienta diseñada para conectar a padres y profesores, facilitando la organización de tutorías y el seguimiento escolar en pocos clics.
</p> <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300">
Más información
</button> </div> <picture class="md:max-w-80 flex justify-center items-center mt-12 mb-12"> <img src="/img/image.png" class="h-1/6 md:h-auto"> </picture> </div> </section>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Hero.astro", void 0);

const $$Explanation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 p-8 py-20"> <div class="container mx-auto md:max-w-[1060px] flex flex-col md:flex-row items-center justify-between"> <picture class="md:w-1/2 mb-8 md:mb-0"> <img src="/img/tutoria.png" alt="Tutoría" class="w-full"> </picture> <div class="md:w-1/2 md:pl-12 text-center md:text-left"> <h2 class="text-4xl font-bold text-gray-800 mb-4">Reserva de tutorías mediante WhatsApp</h2> <p class="text-lg text-gray-600 mb-6">
Optimiza la reserva de tutorías con solo unos clics. El proceso es rápido y fácil tanto para padres como para profesores.
</p> <a href="#" class="bg-[#01B161] text-white px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-[#01914b] transition-all duration-300">
Demo
</a> </div> </div> </section>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Explanation.astro", void 0);

const $$Astro$1 = createAstro();
const $$BenefitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BenefitCard;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 border-t-4 border-transparent hover:border-t-[#01B161]"> <div class="h-16 w-16 mb-6 flex items-center justify-center bg-gradient-to-br from-[#362C85] to-[#1C1935] rounded-full shadow-md"> <img${addAttribute("/icons/" + icon, "src")} alt="icon" class="h-8 w-8"> </div> <h3 class="text-xl font-bold text-gray-800 mb-3 hover:text-[#01B161]">${title}</h3> <p class="text-gray-600 text-sm leading-relaxed">${description}</p> </div>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/components/BenefitCard.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      title: "Optimiza la gesti\xF3n de tutor\xEDas",
      description: "Automatiza la programaci\xF3n y seguimiento de tutor\xEDas, liberando tiempo valioso para enfocarte en lo que realmente importa: la ense\xF1anza y el aprendizaje.",
      icon: "optimization.svg"
    },
    {
      title: "Reduce un 400% el tiempo",
      description: "Nuestra herramienta reduce el tiempo y los costos asociados a la gesti\xF3n de tutor\xEDas. Los padres pueden reservar citas en 5 clicks.",
      icon: "time.svg"
    },
    {
      title: "Genera confianza con una gesti\xF3n transparente",
      description: "Los padres acceden f\xE1cilmente a tutor\xEDas y seguimiento acad\xE9mico. La comunicaci\xF3n fluida y la claridad en los procesos fortalecen su confianza en el colegio.",
      icon: "management.svg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="gradient p-12 py-16"> <div class="container mx-auto md:max-w-[1060px] text-center"> <h2 class="text-3xl font-extrabold text-white mb-4">Nuestros Beneficios</h2> <p class="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Descubre cómo nuestras herramientas pueden mejorar la gestión de tutorías y transformar la experiencia educativa para padres, estudiantes y profesores.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${cards.map((card) => renderTemplate`${renderComponent($$result, "BenefitCard", $$BenefitCard, { "title": card.title, "description": card.description, "icon": card.icon })}`)} </div> </div> </section>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Benefits.astro", void 0);

const $$Astro = createAstro();
const $$FaqItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqItem;
  const { question, answer, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="accordion bg-[#362C85] rounded-lg mb-4 cursor-pointer"> <div class="flex justify-between items-center p-4 header"> <p class="select-none text-white">${question}</p> <span class="text-gray-400 toggle-icon select-none">→</span> </div> <div class="bg-[#251e5a] p-4 rounded-b-lg text-white answer hidden transition duration-1000 ease-in-out"> <p class="select-none">${answer}</p> </div> </div>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/components/FaqItem.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "\xBFPuedo modificar o cancelar una tutor\xEDa?",
      answer: "Al realizar la reserva de la tutor\xEDa, se enviar\xE1 un mail tanto al padre c\xF3mo al profesor. En caso de modificar o cancelar la tutor\xEDa simplemente accede al mail y te dar\xE1 la opci\xF3n.",
      id: "p1"
    },
    {
      question: "\xBFC\xF3mo poner las horas disponibles en el programa?",
      answer: "Como parte de nuestro proceso de implementaci\xF3n, les proporcionaremos un v\xEDdeo explicativo el cual mostrar\xE1 c\xF3mo configurar las horas disponibles en el programa. Este recurso asegurar\xE1 que el proceso sea claro y comprensible.",
      id: "p2"
    },
    {
      question: "\xBFC\xF3mo puedo ver mi calendario de tutor\xEDas?",
      answer: "Una vez se haya realizado la reserva de tutor\xEDa, la cita se guardar\xE1 autom\xE1ticamente en el calendario del mail proporcionado.",
      id: "p3"
    },
    {
      question: "\xBFQu\xE9 hago si tengo problemas t\xE9cnicos?",
      answer: "En caso de errores con el programa o dudas acerca de su funcionamiento, podr\xE1n contactar con nuestro equipo t\xE9cnico mediante correo o llamada telef\xF3nica.",
      id: "p4"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 p-8 py-12"> <div class="container mx-auto md:max-w-[1060px]"> <h2 class="text-2xl font-bold text-[#362C85] text-center mb-8">Preguntas frecuentes</h2> <div class="flex flex-col"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result, "FaqItem", $$FaqItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section> `;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Faq.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="p-8 gradient text-white border-b-4 py-24"> <div class="flex flex-col md:flex-row justify-between mx-auto md:max-w-[1060px] md:gap-20 items-center"> <div class="md:w-1/2 mb-6 md:mb-0 md:py-6 flex flex-col md:gap-2 leading-relaxed"> <h2 class="text-3xl leading-normal font-bold mb-4">¿Listo para transformar la comunicación escolar con TutorLink?</h2> <p class="mb-4">
Solicita una demostración de TutorLink y descubre cómo podemos ayudar a tu institución a optimizar la comunicación y el seguimiento académico.
</p> <p>
Agrega tu información y nos pondremos en contacto contigo a la brevedad.
</p> </div> <div class="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-8 mt-4 md:mt-0"> <h3 class="text-[#362C85] text-3xl font-bold">Contáctanos</h3> <form class="mt-8 text-gray-600"> <div class="mb-4"> <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B161] hover:ring-[#01B161] transition-all duration-300"> </div> <div class="mb-4"> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B161] hover:ring-[#01B161] transition-all duration-300"> </div> <div class="mb-4"> <label for="institution" class="block text-sm font-medium text-gray-700">Centro Educativo</label> <input type="text" id="institution" name="institution" required class="mt-1 block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B161] hover:ring-[#01B161] transition-all duration-300"> </div> <div class="mb-4"> <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label> <input type="tel" id="phone" name="phone" required class="mt-1 block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B161] hover:ring-[#01B161] transition-all duration-300"> </div> <div class="mb-8"> <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B161] hover:ring-[#01B161] transition-all duration-300"></textarea> </div> <button type="submit" class="w-full gradient text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg">Enviar</button> </form> </div> </div> </section>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="gradient text-white p-8"> <div class="mx-auto md:max-w-[1060px] pt-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="flex flex-col items-start space-y-4"> <div class="h-12 mb-12"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> </div> <div> <h3 class="text-lg font-bold mb-4">Demo</h3> <ul class="space-y-2"> <li><a href="#" class="hover:text-gray-300">Introducción</a></li> <li><a href="#" class="hover:text-gray-300">Cómo funciona</a></li> <li><a href="#" class="hover:text-gray-300">Casos de éxito</a></li> </ul> </div> <div> <h3 class="text-lg font-bold mb-4">Beneficios</h3> <ul class="space-y-2"> <li><a href="#" class="hover:text-gray-300">Impacto</a></li> <li><a href="#" class="hover:text-gray-300">Tiempo</a></li> </ul> </div> <div> <h3 class="text-lg font-bold mb-4">Información</h3> <ul class="space-y-2"> <li><a href="#" class="hover:text-gray-300">Sobre Nosotros</a></li> <li><a href="#" class="hover:text-gray-300">Contáctanos</a></li> </ul> </div> </div> <div class="flex justify-between items-center mt-24 border-t-2 pt-6"> <div class="text-sm">
© 2024 TutorLink. Todos los derechos reservados.
</div> <div class="flex space-x-4"> <a href="#" aria-label="Facebook" class="text-white hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6"> <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.018 3.676 9.168 8.438 9.878V14.89H8.053v-2.89h2.385v-1.978c0-2.362 1.4-3.658 3.543-3.658.709 0 1.56.07 1.56.07v1.859h-.878c-.865 0-1.133.536-1.133 1.088v1.619h2.313l-.37 2.89h-1.943v7.056C18.324 21.165 22 17.017 22 12z"></path> </svg> </a> <a href="#" aria-label="Twitter" class="text-white hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6"> <path d="M24 4.557a9.883 9.883 0 01-2.828.775 4.94 4.94 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.924 4.924 0 00-8.389 4.49A13.97 13.97 0 011.671 3.149a4.922 4.922 0 001.524 6.573A4.902 4.902 0 01.964 9.16v.062a4.922 4.922 0 003.946 4.827 4.935 4.935 0 01-2.212.085 4.924 4.924 0 004.6 3.418 9.869 9.869 0 01-6.102 2.102c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 007.557 2.213c9.054 0 14.01-7.504 14.01-14.01 0-.214-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z"></path> </svg> </a> <a href="#" aria-label="Instagram" class="text-white hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.796.244 2.217.407a4.432 4.432 0 011.63.95 4.43 4.43 0 01.95 1.63c.163.42.35 1.046.407 2.217.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.056 1.17-.244 1.796-.407 2.217a4.432 4.432 0 01-.95 1.63 4.43 4.43 0 01-1.63.95c-.42.163-1.046.35-2.217.407-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.056-1.796-.244-2.217-.407a4.432 4.432 0 01-1.63-.95 4.43 4.43 0 01-.95-1.63c-.163-.42-.35-1.046-.407-2.217-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.056-1.17.244-1.796.407-2.217a4.432 4.432 0 01.95-1.63 4.43 4.43 0 011.63-.95c.42-.163 1.046-.35 2.217-.407 1.267-.058 1.647-.07 4.851-.07M12 0C8.741 0 8.332.014 7.052.072c-1.275.058-2.15.27-2.905.576a6.483 6.483 0 00-2.358 1.541A6.483 6.483 0 00.236 4.547C-.07 5.301-.282 6.177-.34 7.452-.398 8.732-.412 9.141-.412 12c0 2.859.014 3.268.072 4.548.058 1.275.27 2.15.576 2.905a6.483 6.483 0 001.541 2.358 6.483 6.483 0 002.358 1.541c.755.306 1.63.518 2.905.576 1.28.058 1.689.072 4.548.072s3.268-.014 4.548-.072c1.275-.058 2.15-.27 2.905-.576a6.483 6.483 0 002.358-1.541 6.483 6.483 0 001.541-2.358c.306-.755.518-1.63.576-2.905.058-1.28.072-1.689.072-4.548s-.014-3.268-.072-4.548c-.058-1.275-.27-2.15-.576-2.905a6.483 6.483 0 00-1.541-2.358A6.483 6.483 0 0019.905.648c-.755-.306-1.63-.518-2.905-.576C15.268.014 14.859 0 12 0z"></path> <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838m0 10.123A3.961 3.961 0 018.038 12 3.961 3.961 0 0112 8.038 3.961 3.961 0 0115.962 12 3.961 3.961 0 0112 15.962m6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path> </svg> </a> </div> </div> </div> </footer>`;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/sections/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tutorlink" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="gradient"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} </div> <main> ${renderComponent($$result2, "Explanation", $$Explanation, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/Users/andres/Documents/dev/pruebaWeb2/src/pages/index.astro", void 0);

const $$file = "/Users/andres/Documents/dev/pruebaWeb2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };