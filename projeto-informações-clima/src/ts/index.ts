// importações

const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector(
  "#input-localizacao "
);

// eventos

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local Precisa ter, pelo menos, 3 letras");
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt_br&units=metric`
  );
  const dados = await response.json();
  console.log(dados);
});
