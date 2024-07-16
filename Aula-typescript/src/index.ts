// Object types

// Interface

// interface Person {
//   nome: string;
//   idade: number;
//   altura: number;
//   profissao: string;
//   trabalha?: boolean;
// }

// quando se coloca ? a atribuição não fica de obrigatoria.

// const pessoa: Person = {
//   nome: "João Pedro",
//   idade: 22,
//   altura: 1.85,
//   profissao: "desenvolvedor",
//   trabalha: true,
// };

// const pessoa2: Person = {
//   nome: "Fernabo",
//   idade: 24,
//   altura: 1.9,
//   profissao: "Técnico de infra",
// };

// console.log(pessoa);
// console.log(pessoa2);

// Types

type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

const pessoa1: Person = {
  nome: "Fernabo",
  idade: 24,
  altura: 1.9,
  profissao: "Técnico de infra",
};

// ...
// Tipagem da função       // tipo literal da função

type Criterio = "greater" | "lower";
// apelido para o tipo
// parametros opcionais somente no final da função
function chooseNumber(numero1: number, numero2: number, criterio?: Criterio): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();
 
      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "greater");

console.log("Numero Escolhido", numeroEscolhido);
// se a função retornar vazio escreve o valor void!
function somar(num1:number, num2: number,): number{
  return num1 + num2

}