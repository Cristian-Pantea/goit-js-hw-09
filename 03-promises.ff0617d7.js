function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=e=>{const n=document.querySelector(e);if(n)return n;throw Error(`the ${e} is not a valid selection`)},l=i("7Y9D8");var s=function(e,n){const t=Math.random()>.3;return new Promise(t?(t,o)=>{setTimeout((()=>{t({position:e,delay:n})}),n)}:(t,o)=>{setTimeout((()=>{o({position:e,delay:n})}),n)})};const a=r("input[name = 'delay']"),u=r("input[name = 'step']"),d=r("input[name = 'amount']");var f=n=>{n.preventDefault();const t=parseInt(a.value),o=parseInt(u.value),i=parseInt(d.value);let r=t;for(let n=0;n<i;n++)s(n,r).then((({position:n,delay:t})=>{console.log(`✅ Fulfilled promise ${n+1} in ${t} ms`),e(l).Notify.success(`✅ Fulfilled promise ${n+1} in ${t} ms`)})).catch((({position:n,delay:t})=>{console.log(`❌ Rejected promise ${n+1} in ${t} ms`),e(l).Notify.failure(`❌ Rejected promise ${n+1} in ${t} ms`)})),r+=o};r(".form").addEventListener("submit",f);
//# sourceMappingURL=03-promises.ff0617d7.js.map
