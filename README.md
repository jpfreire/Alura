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
- [x] 12 - calopsita-loader?
- [x] 13 - O que aprendemos?
- [x] 14 - Consolidando seu conhecimento

### AULA 02 - Preparando o build de produção
- [x] 01 - Preparando o build de produção
    - [x] cofiguração para build de prod adicionada em `package.json` (falhou com sucesso por causa do UglifyJs)
    - [x] plugin babili do node instalado `npm install babili-webpack-plugin@0.1.1 --save-dev`
    - [x] configuração do plugin babili em `webpack.config.js`
- [x] 02 - Configurando um build de produção
- [x] 03 - Mudando o ambiente com cross-env
    - [x] - instalado o cross-env `npm install cross-env@5.0.1 --save-dev`
    - [x] - congiguração do cross-env instalada em `package.json`
- [x] 04 - Uma configuração a ser analisada
- [x] 05 - Sobre o uso do cross-env
- [x] 06 - O que aprendemos?
- [x] 07 - Consolidando seu conhecimento

### AULA 03 - Webpack Dev Server e configuração
- [x] 01 - Adequando a aplicação
    - [x] - ajustes nas urls do front-end
- [x] 02 - Instalação e configuração
    - [x] - instalado o webpack-dev-server `npm install webpack-dev-server@2.5.1 --save-dev`
    - [x] - ajustada a configuração `pub\licPath` em `webpack.config.js`
- [x] 03 - Instalação e configuração
    - [x] - faltou a diretiva `--save-dev` na instalação do webpack-dev-server
    - [x] - o start chamou ~~`webpack`~~ ao invés de `webpack-dev-server`
- [x] 04 - Bundle não encontrado
    - [x] - a propriedade `publicPath` precisa ser definida dentro de `module.export.output`
- [x] 05 - O que aprendemos?
- [x] 06 - Consolidando seu conhecimento

### AULA 04 - Tratando arquivos CSS como módulos
- [x] 01 - Utilizando o npm para gerenciar dependências front-end
    - [x] - remover o bootstrap de `index.html`
    - [x] - arquivos de css apagados
    - [x] - instalado o pacote do  bootstrap `npm install bootstrap@3.3.7 --save`
- [x] 02 - Gerenciamento de dependências frontend
- [x] 03 - Importando Bootstrap como um módulo
    - [x] - Adicionar os imports do bootstrap e tema em `app.js`
    - [x] - instalar o css-loader e o style-loader `npm install css-loader@0.28.4 style-loader@0.18.2 --save-dev`
    - [x] - instalar o url-loader e o file-loader `npm install url-loader@0.5.9 file-loader@0.11.2 --save-dev`
    - [x] - adicionadas configurações dos loaders em `webpack.config.js`
- [x] 04 - A importação que não rolou
    - [x] - erro no `webpack.config.js`: os módulos devem ser separados por !
    - [x] - não deve ser usado o diretório corrente para indicar './...' a carga de um arquivo em `node_module`
- [x] 05 - Importando um CSS qualquer
    - [x] - arquivo `main.css` adicionado ao projeto
    - [x] - arquivo importado em `app.js`
- [x] 06 - Diferentes importações
    -[x] - as importações em `node_module` não fazem uso de `./` ou `../`
- [x] 07 - Resolvendo o FOUC (Flash of Unstyled Content)
    - [x] - arquivo `index.html` ajustado com link para `styles.css`
    - [x] - `npm install extract-text-webpack-plugin@3.0.0 --save-dev`
    - [x] - `webpack.config.js` configurado com plugin
- [x] 08 - Um apanhando sobre importações
- [x] 09 - Resolvemos um problema e criamos outro, mas tem solução!
    - [x] - `npm install optimize-css-assets-webpack-plugin@2.0.0 --save-dev`
    - [x] - `npm install cssnano@3.10.0 --save-dev`
    - [x] - `webpack.config.js` configurado
- [x] 10 - O que aprendemos?
- [x] 11 - Sobre Webpack Dev Server
- [x] 12 - Consolidando seu conhecimento
### AULA 05 - Importando scripts
- [ ] 01 - Importando scripts
    - [x] importar `bootstrap/js/modal.js` (erro: falta jQuery)
    - [x] instalando `npm install jquery@3.2.1 --save`
    - [x] jquery importado mas não presente no escopo global
- [x] 02 - Sobre a importação de scripts
    - [x] a importação do `node_modules` não precisa conter `.js` no arquivo
- [ ] 03 - Lidando com dependências globais
- [ ] 04 - Test your might!
- [ ] 05 - Jogo dos erros!
- [ ] 06 - O que aprendemos?
- [ ] 07 - Consolidando seu conhecimento
## Typescript (concluído)