"use strict";
// importações
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizacao ");
// eventos
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input)
        return;
    const localizacao = input.value;
    //   console.log("submit");
});
