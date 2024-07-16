"use strict";
// Object types
const pessoa1 = {
    nome: "Fernabo",
    idade: 24,
    altura: 1.9,
    profissao: "Técnico de infra",
};
// apelido para o tipo
// parametros opcionais somente no final da função
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("Numero Escolhido", numeroEscolhido);
// se a função retornar vazio escreve o valor void!
function somar(num1, num2) {
    return num1 + num2;
}
