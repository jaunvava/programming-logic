Configurando o Typescript

<div>
<img alt="logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

#

- 1 Inicializar um projeto node.js
- 2 Instalar o Typescript
- 2.1 Instalação global: `npm install -g typescript`
- 2.1 Instalação local (somente dentro da pasta do projeto): `npm install typescript -D`

#

- 3 Utilizar o typescrypt instalado para compilar o nosso código (converter Ts. para Js.) `npx tsc /arquivo`
- 3.1 Passar o parametro para que a compilação seja feita de forma automatica `npx tsc /aquivo --watch`

#

- 4 Configurar o tsconfig.json
- 4.1 `npx tsc --init`
- 4.2 Depois que inicializado o projeto (tsconfig.json) não há necessidade de iniciar a compilação com o nome do arquivo! ficando somente `npx tsc`
