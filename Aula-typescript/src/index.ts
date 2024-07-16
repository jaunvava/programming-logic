// Object types

// Interface

// interface Person {
//   nome: string;
//   idade: number;
//   altura: number;
//   profissao: string;
//   trabalha?: boolean;
// }

// quando se coloca ? a atribuição não fica obrigatoria.

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
function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio
): number {
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
function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// * Utility Types: cria novos tipos a partir de tipos ja existentes.

// 1. Parcial

type PersonPartial = Partial<Person>;

// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type Personpiked = Pick<Person, "nome" | "idade">;

// 4. Omit

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type criterioExclude = Exclude<Criterio, "greater">;

// 6. Record

type Pessoas = Record<string, Person>;

// ex:

const pessoas: Pessoas = {
  "122.345.673-50": {
    nome: "fulano",
    idade: 20,
    altura: 1.55,
  },

  "144.674.718-69": {
    nome: "James",
    idade: 34,
    altura: 1.9,
  },
};
