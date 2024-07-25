// importações

const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector(
  "#input-localizacao "
);

// eventos

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!input) return;

  const localizacao = input.value;
  //   console.log("submit");
});
