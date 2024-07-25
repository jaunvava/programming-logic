// importações

const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector(
  "#input-localizacao "
);
const sectionTempoInfo = document.querySelector("#tempo-info");

// eventos

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionTempoInfo) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local Precisa ter, pelo menos, 3 letras");
    return;
  }

  // renderização

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt_br&units=metric`
    );
    const dados = await response.json();
    const infos = {
      temperatura: Math.round(dados.main.temp),
      local: dados.name,
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    };
    sectionTempoInfo.innerHTML = `
            <div class="tempo-dados">
              <h2>${infos.local}</h2>
              <span>${infos.temperatura} ℃</span>
            </div>
    
            <img src=${infos.icone} />`;
  } catch (err) {
    console.log("Deu um erro na obtenção dos dados da API ", err);
  }
});

// * Fim
