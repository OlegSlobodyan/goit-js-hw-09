function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return l[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const o={form:document.querySelector(".form"),submitButton:document.querySelector(".create-promises"),valueInput:document.querySelector(".first-delay")};function a(e,t){return new Promise(((l,n)=>{setTimeout((()=>{Math.random()>.3?l({position:e,delay:t}):n({position:e,delay:t})}),t)}))}o.valueInput.addEventListener("input",(e=>delayValue=e.target.value)),o.valueInput.addEventListener("input",(e=>{Number(e.target.value)})),o.form.addEventListener("submit",(t=>{t.preventDefault();let{elements:{delay:l,step:n,amount:r}}=t.currentTarget;console.log(` ${l.value}, ${n.value}, ${r.value}`),delayValue=l.value;for(let t=1;t<=r.value;t+=1)a(t,delayValue).then((({position:t,delay:l})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${l}ms`)})).catch((({position:t,delay:l})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${l}ms`)})),delayValue=Number(n.value)+Number(delayValue)}));
//# sourceMappingURL=03-promises.74ab3081.js.map
