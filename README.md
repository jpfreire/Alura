# Alura
Repositório dos cursos da alura

## Webpack: Manipulando módulos na sua webapp (iniciado)
### AULA 01 - Introdução
- [x] 01 - Webpack, o agrupador de módulos
- [x] 02 - (Obrigatório) Infraestrutura mínima
  - [x] Node
  - [x] VS Code
- [x] 03 - (Obrigatório) Download do projeto
    - [x] executando `npm install` no cliente
        - [x] gyp: No Xcode or CLT version detected (`sudo xcode-select --reset`)
        - [x] instalando versão correta via nvm (`brew install nvm; nvm install 8`)
    - [x] executando `npm run watch` no cliente
    - [x] executando `npm start` no servidor
- [x] 04 - Para saber mais: webpack e sua estreita relação com SPA
- [x] 05 - Preparando o terreno para o Webpack
    - [x] ajuste no `index.html`
    - [x] `npm uninstall babel-cli --save-dev`
    - [x] `npm uninstall systemjs --save`
    - [x] `npm install webpack@3.1.0 babel-core@6.25.0 --save-dev`
- [x] 06 - Sobre Webpack e Babel
- [x] 07 - O temível `webpack.config.js`
- [x] 08 - Arquivo de configuração
- [x] 09 - Problema no `package.json`
    - [x] Aspas simples ao invés de duplas
- [x] 10 - Jogo dos erros 
    - faltou importar o pacote `path` e;
    - o atributo `filename` na configuração
- [x] 11 - Babel-loader, a ponte entre o Webpack e o Babel
    - [x] `npm install babel-loader@7.1.0 --save-dev`
    - [x] módulos configurados em `webpack.config.js`
    - [x] ajuste para remover o systemjs de carregamento de módulos via browser
        - módulos do `.babelrc` ajustado: removido plugin `transform-es2015-modules-systemjs`
        - dependencia desintalada `npm uninstall babel-plugin-transform-es2015-modules-systemjs --save-dev`
    - [x] `npm run build-dev`
- [ ] 12 - calopsita-loader?
- [ ] 13 - O que aprendemos?
- [ ] 14 - Consolidando seu conhecimento

## Typescript (concluído)