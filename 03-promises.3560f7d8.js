const e={firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector(".form")};function t({position:e,delay:t}){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}function o(e){console.log(e)}function n(e){console.log(e)}e.form.addEventListener("submit",(function(r){r.preventDefault();const u=Number(e.firstDelay.value),m=Number(e.step.value),c=Number(e.amount.value);for(let e=0;e<c;e+=1){t({position:e+1,delay:u+m*e}).then(o).catch(n),r.currentTarget.reset()}}));
//# sourceMappingURL=03-promises.3560f7d8.js.map
