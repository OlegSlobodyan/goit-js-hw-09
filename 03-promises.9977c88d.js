function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");const u={form:document.querySelector(".form"),submitButton:document.querySelector(".create-promises"),valueInput:document.querySelector(".first-delay")};function i(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.valueInput.addEventListener("input",(e=>{Number(e.target.value)})),u.form.addEventListener("submit",(t=>{t.preventDefault();let{elements:{delay:r,step:n,amount:o}}=t.currentTarget;delayValue=r.value;for(let t=1;t<=o.value;t+=1)i(t,delayValue).then((({position:t,delay:r})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)})),delayValue=Number(n.value)+Number(delayValue)}));
//# sourceMappingURL=03-promises.9977c88d.js.map
