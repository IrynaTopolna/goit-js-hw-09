!function(){var e={firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector(".form")};function n(e){var n=e.position,o=e.delay,t=Math.random()>.3;return new Promise((function(e,u){setTimeout((function(){t?e("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):u("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)}))}function o(e){console.log(e)}function t(e){console.log(e)}e.form.addEventListener("submit",(function(u){u.preventDefault();for(var c=Number(e.firstDelay.value),r=Number(e.step.value),a=Number(e.amount.value),m=0;m<a;m+=1){n({position:m+1,delay:c+r*m}).then(o).catch(t)}}))}();
//# sourceMappingURL=03-promises.a0c7e00e.js.map
