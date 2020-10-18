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
- [x] 01 - Importando scripts
    - [x] importar `bootstrap/js/modal.js` (erro: falta jQuery)
    - [x] instalando `npm install jquery@3.2.1 --save`
    - [x] jquery importado mas não presente no escopo global
- [x] 02 - Sobre a importação de scripts
    - [x] a importação do `node_modules` não precisa conter `.js` no arquivo
- [x] 03 - Lidando com dependências globais
    - [x] importando jquery de forma global em `webpack.ProvidePlugin`
    - [x] removido o import em `app.js` pois o jQuery é provido de forma global  pelo webpack
- [x] 04 - Test your might!
- [x] 05 - Jogo dos erros!
    - [x] - errei por achar que o jQuery deveria estar com aspas também -1 erro: 2 apenas.
- [x] 06 - O que aprendemos?
- [x] 07 - Consolidando seu conhecimento

### AULA 06 - Boas práticas
- [x] 01 - Otimizando o build com Scope Hoisting
    - [x] adicionado `ModuleConcatenationPlugin` em `webpack.config.js`
- [x] 02 - Resumo
- [ ] 03 - Separando o nosso código das bibliotecas
    - [x] adicionando o plugin `CommonsChunkPlugin` em `webpack.config.js` 
    - [x] suprimindo o `reflect-metadata` em `index.html` (ja importado pelo webpack)
    - [x] adicionando o `vendor.bundle.js` em `index.html` 
- [x] 04 - CommonsChunkPlugin
    - [x] além de adicionar o plugin é necesário também adicionar os pacotes importados ao entry
- [x] 05 - Gerando a página principal automaticamente
    - [x] `npm install html-webpack-plugin@2.29.0 --save-dev`
    - [x] removidas as referências de css e javascript do `index.html`
    - [x] renomear o `index.html` para `main.html`  com o comando `git mv ./index.html ./main.html`
    - [x] configuração do `html-webpack-plugin` adicionada em `webpack.config.js`
- [x] 06 - Code splitting e Lazy loading
    - [x] adição de `System.import` no carregamento do serviço em `NegociacaoController` 
    - [x] remoção do carregamento estático no index
- [x] 07 - System.import vs import
    - [x] ajustando `System.import` para `import` em `NegociacaoController` (futuro padrao ecmascript, mas dá problema no babel)
    - [x] `npm install babel-plugin-syntax-dynamic-import@6.18.0 --save-dev`
    - [x] ajuste necessário em `.babelrc`
- [x] 08 - Sobre code splitting e lazy loading
    - [x] A) falsa: instalação não pois o `CommonsChunkPlugin` já vem instalado
- [x] 09 - Quais são os arquivos para distribuição?
- [x] 10 - Alterando o endereço da API no build de produção
    - [x] em `webpack.config.js`:
        - [x] criação de variável
        - [x] utilização do plugin `webpack.DefinePlugin`
    - [x] utilização da variável definida em `webpack.config.js` em `NegociacaoService.js`
- [x] 11 - API de desenvolvimento e de produção
- [x] 12 - O que aprendemos?
- [x] 13 - Consolidando seu conhecimento
- [x] 14 - Considerações finais
- [x] 15 - Download do projeto final
- [x] 16 - Entendendo o que fizemos

## Angular parte 1: Fundamentos
### AULA 01 - Bem começado, metade feito
- [x] 01 - Introdução
- [x] 02 - (Obrigatório) Infraestrutura do treinamento
    - [x] Node
    - [x] VS Code
- [x] 03 - Motivação para uso de uma SPA
- [x] 04 - Considerações sobre o uso do Angular
- [x] 05 - Angularjs vs Angular
- [x] 06 - Angular CLI, instalação e criação do projeto
    - [x] `npm install -g @angular/cli@6.0.7`
    - [x] `ng --version`
    - [x] `ng new alurapic`
    - [x] `cd alurapic`
    - [x] `ng serve --open`
- [x] 07 - Erro no comando: ng serve --open
    - [x] `npm install rxjs@6.0.0 --save`
- [x] 08 - Comandos iniciais
- [x] 09 - Entendendo a estrutura
    - [x] tudo é um componente
    - [x] `app.component.ts` é o arquivo com o componente principal inicial
    - [x] `index.html` possui a tag app-root definida no arquivo acima
    - [x] o componente precisa ser defininido pela anotação `@Component`, cujos principais atributos são: selector, templateUrl, styleUrls.
- [x] 10 - Primeiro contato com data binding
    - [x] apresentado angular expression: {{ title }}
    - [x] apresentado _data binding_
    - [x] angularCLI já vem com _browser sync_
- [x] 11 - Adequando o template gerado e mais data binding
    - [x] envolver o nome atributo em [colchetes] para fazer _one-way data binding_
    - [x] dentro de tag pode ser usado  o _double mustash_{{ }}
- [x] 12 - Fixando data binding
- [x] 13 - Convenções de código
    - [x] em nome do arquivo do componente em caixa baixa: `nome.component.ts`
    - [x] a classe do componente em _PascalCase_ 
    - [x] o nome do arquivo html e css serão o mesmo do componente finalizando em `.html` e `.css` respectivamente
- [x] 14 - Convenções do Angular
- [x] 15 - Consolidando seu conhecimento
- [x] 16 - O que aprendemos?

### AULA 02 - Criando o primeiro componente
- [x] 01 - Adicionando Bootstrap ao projeto
    
    para adicionar bibliotecas é preciso colocá-las no processo de build, um css global é preciso ser indicado dentro de `angular.json`
    - [x] `npm install bootstrap@4.1.1`
    - [x] stop/start no angularCLI e tudo certo👍
- [x] 02 - Criando o primeiro componente
    - [x] criado componente `<ap-photo>` com `PhotoComponent`
- [x] 03 - Tornando uma classe um componente
- [x] 04 - Declarando o componente no módulo da aplicação
    o componente precisa pertencer a um módulo, facilitando a inclusão dos componentes interligados.
    - [x] adicionado o componente na declaração do módulo em `app.module.ts`
- [x] 05 - Inbound properties: passando dados para o componente

    os colchetes são utilizados quando os valores devem ser lidos do componente para a página `<img [src]="...">`
    quando o valor são passado da página para o componete não se usam os colchetes ficando os componentes de forma simples `<ap-photo url="...">`

    a anotação `@Input` define que uma propriedade do componente é _inbound property_, assim recebendo valores da página
- [x] 06 - Sobre a inbound property
- [x] 07 - Organizando nosso código em módulos
    
    o módulo precisa ser anotado com `@NgModule` declarando os componetes na propriedade `declarations` e em `exports` os componentes acessíveis por quem usa o módulo.
- [x] 08 - Sobre a criação de um component
- [x] 09 - Utilizando a primeira diretiva

    uma diretiva muda o comportamento de um componente, o `*ngFor` é utilizada como atributo da tag ap-photo
- [x] 10 - Consolidando seu conhecimento
- [x] 11 - O que aprendemos?

### AULA 03 - Integração com Web API's
- [x] 01 - Projeto da aula anterior
- [x] 02 - SPAs e consumo de APIs
- [x] 03 - (Obrigatório) Baixando e subindo o servidor da API
    
    comandos executados:
    - [x] `cd api`
    - [x] `npm install`
    - [ ] não foi necessário: `npm install --unsafe-perm -g sqlite3`
    - [x] `npm start`
- [x] 04 - Nomenclatura do servidor
- [x] 05 - HttpClient e injeção de dependência
    
    adição do módulo `HttpClientModule` aos imports do módulo principal.
    Após os ajustes em `app.module.ts` o vscode passou a apresentar os imports corretamente.
- [x] 06 - Importando o HttpClient
- [x] 07 - Consumindo dados da API
- [x] 08 - Isolando a acesso em serviços

    - [x] criado o `PhotoService` anotado como `@Injectable` para que o seja possível injetar no componente principal
    
- [x] 09 - Tipando nossa API
    - [x] criada inteface Photo e associada ao retorno do serviço implicitamente através da tipagem do retorno do `http.get<Photo[]>`
- [x] 10 - Ciclo de vida de um componente

    acesso ao serviço de fotos movido para o método `AppComponent.ngInit`  para que o acesso seja feito após a instanciação da classe e da injeção das _inbound properties_
- [x] 11 - Consolidando seu conhecimento
- [x] 12 - O que aprendemos?

###  AULA 04 - Single Page Applications e rotas
- [x] 01 - Projeto da aula anterior
- [x] 02 - Organizando ainda mais nossa aplicação
    - [x] criado componente `photo-list` que ficará encarregado de exibir a lista de fotos; por este motivo o `PhotoComponent` não precisa mais estar no export do `PhotosModule` e nem no componente principal da aplicação
    - [x] ng generate component `photos/photo-list`
- [x] 03 - Gerar componente pelo CLI
- [x] 04 - Separar código
- [x] 05 - BrowserModule e CommonModule
    - [x] `CommonsModule` importado em `PhotosModule` para que as diretivas angular funcionem nos componentes internos
- [x] 06 - Sobre módulos
- [x] 07 - Single Page Application e Rotas
    - [x] criado componente `photo-form`
    - [x] criado componente de rotas: `AppRoutingModule` com as rotas
    - [x] ajustado o componente principal para utilização das rotas
- [x] 08 - Lidando com rotas inexistentes
    - [x] criado módulo de erro para receber rotas não exsitentes 
- [x] 09 - Sobre roteamento
- [x] 10 - Segmentos de rotas
    - [x] adicionado parâmetro ao segmento de rota (`:userName`)
    - [x] parametros capturados em `PhotoListComponent.constructor(activatedRoute: ActivatedRoute)` 
    - [x] valor recuperado através de `this.activatedRoute.snapshot.params.userName`
- [x] 11 - Qual rota?

    Quando a rota solicitada não se encaixa em nenhuma rota definida se houver sido definia a rota que receberá o chamado é
    `{ path: '**', component: ABComponent }`
- [x] 12 - Consolidando seu conhecimento
- [x] 13 - O que aprendemos?

### AULA 05 - Novo componente, novos conceitos
- [x] 01 - Projeto da aula anterior
- [x] 02 - Melhorando a apresentação da lista
- [x] 03 - Componente exclusivo para listar fotos
    
    criado componente que irá gerenciar a apresentacao: `ng generate component photos/photo-list/photos`
- [x] 04 - Implementando a lógica do Grid
- [x] 05 - A função Array.slice
- [x] 06 - Um pouco mais sobre Array.slice
- [x] 07 - Change Detection

    a mudança de template de `PhotosComponent` para o subcomponente `PhotoListComponent` fez com que a renderização parasse de funcionar: o template filho não recebeu a mudança que ocorreu após a inicializaçao. Com isto foi preciso atualizar o componente filho com o a captura de mudança através do método `ngOnChanges`.
- [x] 08 - Sobre a interface OnChanges
- [x] 09 - Consolidando seu conhecimento
- [x] 10 - O que aprendemos?

### AULA 06 - Melhorando a experiência do usuário
- [x] 01 - Projeto da aula anterior
- [x] 02 - Binding de eventos
    
    o bind da view para o componente feito no evento é feito através de parênteses: <... (keyup)="x=$event.target.value"><...>
- [x] 03 - Pipe e implementação
    - [x] criado pipe em `photo-list\filtrar-pela-descricao.pipe.ts`
    - [x] deve implementar `PipeTransform`
    - [x] exemplo de utilização: `<app-photos [photos]="photos | filtrarPelaDescricao: filtro"></app-photos>`
- [x] 04 - Criando nosso próprio pipe
- [x] 05 - Resolvers

    o Resolver é um componente que atua antes do componente ser ativado.
    - [x] criado `PhotoListResolver implements Resolve<Observable<Photo[]>>`
    - [x] módulo de rota atualizado com a propriedade `resolve: {photos: PhotoListResolver}` 
    - [x] `PhotoListComponent` recebe os dados carregados da rota através da propriedade `this.activatedRoute.snapshot.data.photos` ao invés de utilizar o serviço
- [x] 06 - Implementando Resolvers
- [x] 07 - RxJS e seu Subject

    - [x] criado `debounce: rxjs.Subject<string>` para atuar como _Observable_ e _Subject_ na modificação do filtro atuando como:
        
        _Observer_ em `photo-list.component.html` recebendo valores através de `(keyup)="debounce.next($event.target.value)"`

        _Subject_ em `photo-list.component.ts` transmitindo os valores recebidos através de `this.debounce.subscribe(filtro => this.filtro = filtro);` 
    - [x] adicionado `debounceTime(300)` (termo da elétrônica) utilizado para adicionar retardo e acumular a entrada repassando os dado em no tempo especificado.
- [x] 08 - Padrão debounce com RxJS
- [x] 09 - Paginação de dados
    - [x] método criado `PhotoService.listFromUserPaginated(userName: string, page: number)`
- [x] 10 - LoadButton
    - [x] Criado componente `<app-load-button>` 
    
    o componete utiliza a condição `*ngIf="hasMore; else idTemplate"` para exibir/ocultar o botão e utiliza `<ng-template #idTemplate>` para oculta/exibir a mensagem 'Não há mais itens a carregar'

    - [x] `PhotoService` adicionado novamente em `PhotoListComponent` (removido em 06.05)
    - [x] Bind do componente criado e ajuste de reatribuição de variável necessária pois o _Angular_ só percebe que um novo componente foi adicionado caso a variável seja uma nova, por isso a definição `this.photos = this.photos.concat(fotos)` ao invés de push no array
- [x] 11 - Consolidando seu conhecimento

### AULA 07 - Lapidando ainda mais nossa aplicação
- [x] 01 - Projeto da aula anterior
- [x] 02 - Submódulos
    - [x] criados módulos: `PhotoModule`, `PhotoFormModule`, `PhotoListModule` 
    - [x] ajustado o `PhotosModule` para importar os módulos ao invés das classes
- [x] 03 - Integração com Font Awesome
    - [x] instalado `npm install font-awesome@4.7.0`
    - [x] `angular.json` ajustado para incluir a fonte
    - [x] inclusão da fonte em `photo-list.component.html`
- [x] 04 - Component container e ng-content
    - [x] criado `CardComponent` para encapsular um `card` do `bootstrap`
    - [x] criado `CardModule` para que o componente possa ser exportador por mais de um componentes na mesma aplicação
    - [x] `CardModule` foi importado em `PhotoListModule` componente no qual pertence o `PhotoComponent` onde é usado
- [x] 05 - Desaparecimento de elementos
- [x] 06 - Componentizando o filtro

    filtro transferido para o `photo-list\SearchComponent` simplificando o  `PhotoListComponent` e seu template, mas quebrou a funcionalidade pois não não há comunicação do componente de busca com o pai
- [x] 07 - Output property
    - [x] criado evento `onDebouncedTyping` em `SearchComponent` para emitir os eventos de digitação do campo para o componente pai
- [x] 08 - Sobre output property
- [x] 09 - Criando a primeira diretiva
    -[x] criado módulo `ng g m shared/directives/darkenOnHover`
    -[x] criada diretiva `ng g d shared/directives/darken-on-hover/darkenOnHover --module=/shared/directives/darken-on-hover/darken-on-hover.module.ts`
- [x] 10 - Terminando a implementação da diretiva
    - [x] criados atributos `el:ElementRef`, para armazenar a referência ao elemento, e o `rer:Renderer`, para manipular o elemento mesmo quando não houver um DOM disponível (server side rendering)
    - [x] criados métodos anotados com `@HostListener('mouseover')` para que o angular invoque o método quando o elemento emitir o evento especificado
    - [x] adicionado o módulo `DarkenOnHoverModule` ao import do módulo do elemento que utiliza a diretiva
    - [x] criada _inbound property_ `brightness` para receber o valor do brilho por parâmetro: `<div ... darkenOnHover brightness="50%">`
- [x] 11 - Sobre diretivas
- [x] 12 - Considerações finais
- [x] 13 - Consolidando seu conhecimento
- [x] 14 - Projeto completo

## Angular parte 2: Autenticação, Forms e lazy loading
### AULA 01 - O componente para login
- [x] 01 - Projeto da aula
- [x] 02 - Atenção!
- [x] 03 - O componente de login

    sendo o login um compoente de página não precisa de selector <app-...> pois não será utilizado dentro de outro component, apenas o próprio template foi definido.
- [x] 04 - Validação de formulários

    utilizando o _Model Driven Forms_ a validação fica nos componentes e não no template. O `ReactiveFormsModule` contém diretivas e infraestrutura para validação de formulários.

    O objeto `FormGroup` agrupa e calcula o status de todos os objetos filhos, informando se o grupo está válido ou inválido.

    O `FormBuilder` foi utilizado para criar o `FormGroup` com os componentes do tamplate mapeados através do atributo `formControlName`: `userName` e `password`
- [x] 05 - Importando o módulo de validação
- [x] 06 - Componentizando mensagens de validação
- [x] 07 - Enviando credenciais para a API
- [x] 08 - Redirecionamento pós login
    - utilizado o componente de rotas para navegar `this.router.navigate(['user', userName])`
- [x] 09 - Redirecionando depois do login
- [x] 10 - ViewChild: obtendo referências do template
    
    através de `@ViewChild('userNameInput')` o angular injeta um `ElementRef<T>`  encontrado pela variável de referência do template  `<input #userNameInput`
- [x] 11 - Focus automático
- [x] 12 - Detectando a plataforma de execução

    criado `PlatformDetectorService`para detectar se o angular esta rodando no navegador.

    A função `isPlatformBrowser` do angular recebe um id de plataforma que foi criado através da injeção no construtor do serviço: `@Inject(PLATFORM_ID) private platformID: string`
- [x] 13 - Consolidando seu conhecimento
- [x] 14 - O que aprendemos?

### AULA 02 - Autenticação e o papel do token
- [x] 01 - Projeto da aula anterior
- [x] 02 - Acesso do header de resposta

    para acessar o _token_ nos cabeçalhos da requisição foi utilizado o método `pipe`, que não consome a resposta http, em conjunto com o método `tap` do `rxjs\operators`: itera sobre os objetos retornando ao final um `Observable` identico ao da entrada
- [x] 03 - Acessando o headers
- [x] 04 - Armazenamento do token
    
    criado serviço que armazena o token no `window.localStorage` 
- [x] 05 - Local de armazenamento do token
- [x] 06 - Segurança do token
- [x] 07 - Sobre o token
- [x] 08 - Cabeçalho da aplicação
    - [x] criado componente do cabeçalho da aplicação dentro de core/header
    - [x] criado o módulo core para que o `HeaderComponent` possa ser exportado e usado no `<app-root>` (componente principal da aplicação)
- [x] 09 - Consolidando seu conhecimento
- [x] 10 - O que aprendemos?

### AULA 03 - Usuário logado e proteção de rotas
- [x] 01 - Projeto da aula anterior
- [x] 02 - Separação de responsabilidades
    - [x] `npm install jwt-decode@2.2.0` pra decodificar o token
    - [x] criado o `UserService` que decodifica o token através do `jwt-decode`
    - [x] criado uma propriedade do tipo `Subject` para emitir o usuário logado
    - [x] `AuthService` atualizado para gravar o token com o `UserService`
- [x] 03 - O papel do BehaviorSubject

    o `BehaviorSubject` armazena o último valor até que algum `Observable` possa consumir o valor emitido
    - `HeaderComponent` precisou de 2 objetos para resolver o problema: 
        - um objeto `User` para exibir as propriedades no template;
        - outro objeto do tipo `Observable<User>` para  atualizar o objeto utilizado no template.
- [x] 04 - Entendendo BehaviorSubject
- [x] 05 - Async pipe

    adicionando `| async` no template podemos utilizar um `Observable` eliminando o código de atualização na classe do componente
- [x] 06 - O uso do Async pipe
- [x] 07 - Implementação do logout
- [x] 08 - Guarda de rotas

    O guarda de rotas foi criado como um serviço que implementa `CanActivate` para que possa receber por injeção de dependência `UserService` e `Router`. Sendo  utilizado em `app.routing.module.ts` no item do array de rotas: `canActivate: [AuthGuardService]`
- [x] 09 - O guarda de rotas
- [x] 10 - A diretiva `routerLink`

    faz o redirecionamento do link no template seja feito sem o recarregamento a página ex: `[routerLink]="['signup']"`
- [x] 11 - Consolidando seu conhecimento
- [x] 12 - O que aprendemos?

### AULA 04 - Registro de novos usuários
- [x] 01 - Projeto da aula anterior
- [x] 02 - O componente de registro
    - [x] criado o `SignUpComponent`
    - [x] associado em `app.routing.modules.ts`
    - [x] declarado em `home.module.ts``
    - [x] importado o `FormsModule` para silenciar o erro do angular por não estar associado o ReactFormModule
- [x] 03 - Validação do formulário

    reutilizado o componente `app-vmessage`
- [x] 04 - Criando nosso próprio validador
    - [x] criado `lowerCaseValidator(control: AbstractControl)`

        a função retorna um objeto javascript com uma propriedade `{loweCase:...}` que pode ser acessada no template através de `*ngIf="signupForm.get('userName').errors?.lowerCase"`
- [x] 05 - Criação de validador
- [x] 06 - Validador assíncrono
    - [x] criado `SignUpService`  para acessar a API do backend que indica se um usuário já foi registrado
    - [x] criado o validador `UserNotTakenValidatorService` que validará utilizando o serviço criado.
        
        Os *validadores* não suportarem injeção de dependência, por esse motivo precisamos criá-los como Serviço, quando houver necessidade de acesso a algum outro serviço.

        O método `switchMap` foi utilizado no retorno da API ao invés de `map` pois tem a capacidade de cancelar uma requisição ainda em curso (no caso de uma nova chamada ao _backend_ somente a mais recente será considerada)
    - [x] em `SignUpComponent` o validador foi colocado como terceiro parâmetro pois validadores assíncronos não seguem juntos aos síncronos
- [x] 07 - Criação de validador assíncronos
- [x] 08 - Submissão dos dados
    - [x] `signup()` acessando o _backend_ para criação de novo usuário
    - [x] criada interface `NewUser` para tipar o retorno do _backend_
- [x] 09 - Sobre a classe FormGroup
- [x] 10 - Consolidando seu conhecimento
- [x] 11 - O que aprendemos?

### AULA 05 - Rotas filhas e lazy loading

- [x] 01 - Projeto da aula anterior
- [x] 02 - Rotas filhas

    Ao adicionar rotas filhas em `app.routing.module.ts` o componente pai precisa adicionar `<router-outlet></router-outlet>` para que os componentes filhos  sejam exibidos

    se houver uma rota filha definida como mesmo caminho da rota pai, o componente pai é exibido primeiro e em seguida o filho na tag `<router-outlet>` do componente pai
- [x] 03 - Qual rota?
- [x] 04 - Build do projeto

    devido à incompatibilidade da _History API_ foi adicionada a configuração `{ useHash: true }` ao módulo de rotas.
    - ajustada a visibilidade da propriedade utilizada no componente photo-list
- [x] 05 - Lazy loading e code splitting
- [x] 06 - Implementando o Lazy loading
    - [x] para criar o _lazy load_ foi ajustado o arquivo principal de rotas `app.routing.module.ts` movendo as rotas para os módulos pertinente: `home.routing.module.ts`
    - [x] removido o import do módulo em _lazy load_ em `app.module.ts` para que não seja carregado antecipadamente pelo angular
    - [x] `ng build --prod` gera o arquivo `main.js` e outro  `0.<hash>.js` com o módulo home
- [x] 07 - Refinando o uso de serviços
    - [x] em `UserNotTakenValidatorService` pois não fazia sentido utilizar 
    `@Injectable({providedIn: 'root'})` pois o serviço só é utilizado em `SignUpComponent`
    - [x] em `SignUpComponent` o validador foi adicionado como provider na anotação do componente: `providers: [UserNotTakenValidatorService]`, assim apenas neste componente o serviço está disponível
    - [x] o `SignUpService` foi disponibilizado em `home.module.ts`, assim ele está disponível em todos os componentes do módulo _home_
- [x] 08 - Interceptadores e envio do token
    `RequestInterceptor` criado implpementando `HttpInterceptor` para adicionar o token ao cabeçalho

    Adicionado ao CoreModule como _provider_ para que possa tratar o _request_, foi marcado como `multi: true` para repassar a outros interceptores caso venham a ser criados:
    ```javascript
        providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: RequestInterceptor,
                multi: true
            }
        ]
    ```
- [x] 09 - Consolidando seu conhecimento
- [x] 10 - Considerações finais
- [x] 11 - Projeto completo
- [x] 12 - O que aprendemos?

## Angular parte 3: upload, build e novos componentes

### AULA 01 - Upload de fotos

- [x] 01 - Projeto da aula anterior
- [x] 02 - Este curso é uma continuação
- [x] 03 - Rodapé

    criado de forma similar ao header `(observable$ | async) as user` revisitado no template
- [x] 04 - O formulário upload de fotos

    `PhotoFormModule` ajustado para `ReactiveFormsModule, VmessageModule, FormsModule` adicionados para uso na validação do formulário
- [x] 05 - Validando o formulário
- [x] 06 - Obtendo os dados do formulário

    adicionado o _event bind_ `(change)="file = $event.target.files[0]"` para salvar o conteúdo do arquivo no atributo `file: File` do componente.
- [x] 07 - Upload da foto

    para salvar o arquivo é preciso passar o arquivo como segundo parâmetro do _post_ dentro de um `FormData`
- [x] 08 - Sobre o upload
- [x] 09 - Arquivo selecionado
- [x] 10 - FormData
- [x] 11 - Adequando a exibição das fotos

    propriedade `url` transformada em _getter_ e _setter_ para ajustar a url da imagem conforme o tipo de conteúdo
- [x] 12 - Consolidando seu conhecimento

### AULA 02 - Lapidando o upload

- [x] 01 - Projeto da aula anterior
- [x] 02 - Um botão mais elegante

    ao colocar `#fileInput` num component podemos utilizar `(click)="fileInput.click()"` acessando métodos e propriedades do componente 
- [x] 03 - Preview de imagens

    criado o _preview_ com a utilização de `new FileReader().readAsDataURL(file)` que emite um evento `onload` com o resultado da conversão da imagem em uma url do tipo [data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) que representa a imagem em `base64` que pode ser prevista no navegador
- [x] 04 - Sobre variável de templates
- [x] 05 - *ngIf e else
- [x] 06 - Escondendo um elemento
- [x] 07 - Seleção automática de arquivos

    criada a diretiva `appImediateClick` utilizando `PlatformDetectorService` para detectar se a diretiva está sendo executada no navegador
- [x] 08 - Bloqueando acesso não autenticado

    renomeado `AuthGuardService` para `LoginGuardService` e criado um novo `AuthGuard` testando se o usuário está logado e em caso de negativo o redireciona para a página inicial
- [x] 09 - Consolidando seu conhecimento

### AULA 03 - Detalhes da foto

- [x] 01 - Projeto da aula anterior
- [x] 02 - Rotas parametrizadas

    criado componente `PhotoDetailsComponent` e adicionada a rota paremetrizada `{path: 'p/:photoId', component: PhotoDetailsComponent}`
- [x] 03 - Extraindo parâmetros de rotas
    - [x] adicionado link para o detalhe através de `<a [routerLink] = "['/p', photo.id]> ...</a>"` necessitando o impor de `RouterModule` em `PhotoListModule`
    - [x] através da propriedade injetada `ActivatedRoute` podemos obter o parâmetro `:photoId` da rota: `this.route.snapshot.params.photoId`
- [x] 04 - Segmento de rota
- [x] 05 - Buscando a foto selecionada da API

    template do componente utilizando _async pipe_ `*ngIf="(photo$ | async) as photo"` previne que seja disparado um erro de _undefined_ devido à diferença de tempo entre a exibição do template e a chamada ao _backend_

    criado o método `PhotoService.findById(photoId: string)`
- [x] 06 - Serviço para obtenção de segmentos de rotas
- [x] 07 - Como fazer?
- [x] 08 - Consolidando seu conhecimento

### AULA 04 - Comentando fotos
- [x] 01 - Projeto da aula anterior
- [x] 02 - Buscando comentários

    - [x] criada a interface `PhotoComments`
    - [x] criado o método `PhotoService.getComments(photoId:number): Observable<PhotoComments[]>`
- [x] 03 - Comentários como componente

    criado componente `PhotoCommentsComponent` para a exibição dos comentários, retirando do `PhotoDetailsComponent` a responsabilidade de exibir os comentários
- [x] 04 - Sobre componentização
- [x] 05 - Validação

    revisitando `FormGroup`:
    - no template `[formGroup]="commentForm"` e declarar os componentes de input através de `formControlName="comment"`
    - no componente declarar `commentForm: FormGroup` e criar no `ngOnInit(){this.formBuilder.group({...})}` com os componentes declarados
- [x] 06 - Comentando fotos

    submit template, _post_ adicionado ao serviço e chamada adicionada ao componente
- [x] 07 - Lidando com o refresh de comentários

    Ao adicionar um comentário nos inscrevemos recebemos um `Observable`, que utilizamos para atualizar os comentários do template: `this.comments$`. Que gerou um cascata de subscribe:

    ```TypeScript
    this.photoService.addComments(this.photoId, comment).
    subscribe(() => {
      this.comments$ = this.photoService.getComments(this.photoId);
      this.comments$.
      subscribe((comments) => {
        this.commentForm.reset();
        console.log('comments read');
      }, (err) => {console.log('Error fetching comments', err );
      });
      ```

    Para evitar uma cadeia de _subscribe_ foram utilizados os métodos `pipe(switchMap( => ...))` pois o retorno do `addComment` não possui informação dos comentários já inseridos assim podemos descartar o retorno ao utilizar o `switchMap` transformando em um `Observable<PhotoComment[]>`:

    ```typescript
    this.comments$ = this.photoService.addComments(this.photoId, comment).
    pipe(switchMap(() =>  this.photoService.getComments(this.photoId)));
    ```

    o operador `pipe(tap(...))` foi utilizado após o último `pipe` para executar uma ação sem alterar o retorno do objeto observado do método `addComments`
    
- [x] 08 - Um problema não esperado

    Ao mudar a url da listagem de fotos estávamos identificando que o a lista não mudava conforme esperado, ex: ao carregar `/user/flavio` e em seguida mudar para `/user/jpfreire` a lista de fotos permanecia a mesma.

    O problema acontecia com a utilziação dos parâmetros de rota de forma estática: `activatedRoute.snapshot.params`, mudando para a subscrição ao objeto `activatedRoute.params.subscribe(params => {...})` temos uma solução que reage dinamicamente à mudança na rota.
- [x] 09 - Análise de código
- [x] 10 - Lapidando a experiência do usuário
- [x] 11 - Sobre o template
- [x] 12 - Consolidando seu conhecimento

### AULA 05 - Remoção de fotos e novos componentes

- [x] 01 - Projeto da aula anterior
- [x] 02 - Permissão de comentários

    revisitando `ngIf` com cláusula `else`:
    ```html
    <app-photo-comments ... *ngIf="photo.allowComments; else warning" ></app-photo-comments>
    <ng-template #warning> ... </ng-template>
    ```
- [x] 03 - Remoção de fotos

    adicionado método `PhotoService.removePhoto()` e `PhotoDetailsComponent.remove()`
- [x] 04 - Ocultando elementos que requerem permissão

    diretiva `appPhotoOwnerOnly` criada com a propriedade `ownedPhoto`, que deve ser atribuída logo em seguida:
    ```html
    <i appPhotoOwnerOnly [ownedPhoto]="photo"></i>
    ```
- [x] 05 - Revisão - O Pipe Async
- [x] 06 - Sobre liberação de recursos
- [x] 07 - Criando nosso próprio tipos
- [x] 08 - Consolidando seu conhecimento

### AULA 06 - Componente de notificação

- [x] 01 - Projeto da aula anterior
- [x] 02 - Modelando dados do componente
- [x] 03 - O modificador readonly
- [x] 04 - A camada de serviço do componente
- [x] 05 - Revisão sobre Subject

    um `Observable` emite os eventos através do método `next()` 🤷‍♂️
- [x] 06 - Implementando o componente
- [x] 07 - Utilizando o novo componente
- [x] 08 - Revisão sobre comunicação entre componentes

    - [x] Variáveis de template podem ser utilizadas para realizar a comunicação entre elementos irmãos na hierarquia de componentes.
    Essas referências podem ser acessadas em qualquer lugar do template, inclusive serem passadas como parâmetros de métodos chamados por eventos.
    - [x] Comunicação entre elemento filho e pai pode ser realizada por meio de _output properties_ (anotado com `@Output`: um instância de `EventEmitter`).
    - [x] Comunicação entre um elemento pai e um filho pode ser realizada través de _inbound properties_ (anotados com `@Input`)
- [x] 09 - Lapidando o componente
- [x] 10 - Um pequeno detalhe

    ajuste nas rotas para redirecionar para `not-found` quando uma imagem não é encontrada no banco de dados.
- [ ] 11 - Consolidando seu conhecimento

### AULA 07 - Curtindo fotos

- [x] 01 - Projeto da aula anterior
- [x] 02 - Exibindo apenas quando logado

    funcionalidade criada através da diretiva `ShowIfLoggedDirective`
- [x] 03 - Revisando o papel do serviço Renderer
- [x] 04 - Preparando o serviço

    o método `PhotoService.like(photoId)` utiliza `pipe(catchError( err => ...)` para tratar o a resposta do _backend_ retornando um _Observable_ com valor falso caso a resposta http seja 304; ou passando adiante o erro capturado `throwError(err)`.
- [x] 05 - Criando Observables com of
- [x] 06 - Curtindo fotos
- [x] 07 - Um pouco mais sobre Rxjs
- [x] 08 - Consolidando seu conhecimento

### AULA 08 - Diferenciando ambientes de deploy

- [x] 01 - Projeto da aula anterior
- [x] 02 - Diferenciando ambientes de deploy

    o angular provê um arquivo que pode ser utilizado para alternar entre ambientes: `src/environments/environment.ts` e `alurapic/src/environments/environment.prod.ts` a escolha do arquivo é dada no parâmetro do comando `ng build` com ou sem a flag `--prod`
- [x] 03 - Considerações gerais
- [x] 04 - Consolidando seu conhecimento
- [x] 05 - Projeto final

## Angular parte 4: lapidando o projeto

### AULA 01 - Alteração do title

- [x] 01 - Projeto da aula anterior
- [x] 02 - Este curso é uma continuação
- [x] 03 - O Serviço Title

    `Title` pode ser utilizado para definir o título, pois num _single page application_ a rota não muda e nenhuma página nova é carregada.
- [x] 04 - Um serviço dedicado para mudanças de título
- [x] 05 - Interagindo com o sistema de rotas

    Para criar uma solução global de mudança do título será utilizado o componente raiz da aplicação: `AppComponent`.

    O sistema de rotas foi utilizado para passar o título da página no atributo `data`.

    No componente `AppComponent` foram injetados:
    - `Router` que possui um `Observable` que emite os eventos de mudança de rota 
    - `Title` que fará a troca do título com o campo `data` coletado da rota
    - `ActivatedRoute` que contém o campo `data` com o título da página

- [x] 06 - Dados arbitrários em rotas
- [x] 07 - Sobre rotas
- [x] 08 - Consolidando seu conhecimento

### AULA 02 - Upload e progresso

- [x] 01 - Projeto da aula anterior
- [x] 02 - Adequando a camada de serviço

    adicionado os parâmetros de `observe` e `reportProgress` abaixo o `Observable` criado com o método `post` emitirá eventos de atualização de upload:
    ```typescript
    return this.http.post(url,formData,
            {
                observe: 'events',
                reportProgress: true
            }
        );
    ```
- [x] 03 - Progresso
- [x] 04 - Exibindo o progresso

    para exibir o progresso de um upload o evento recebido na subscrição deve acessar as propriedades `event.loaded` e `event.total`. Essas propriedades estarão presentes quando o evento emitido for do tipo `HttpEventType.UploadProgress`
    ```typescript
    .subscribe((event: HttpEvent<any>) => {
      if ( event.type === HttpEventType.UploadProgress ) {
        this.percentDone = Math.round(100 * event.loaded / event.total);
      }
    }
    ```

- [x] 05 - O operador finalize
- [x] 06 - Exibição do progresso
- [x] 07 - Consolidando seu conhecimento

### AULA 03 - Indicador de trabalho

- [x] 01 - Projeto da aula anterior
- [x] 02 - Indicador de trabalho

    para indicar o estado do carregamento das páginas será criado um _interceptor_: `loading.interceptor.ts` que irá escutar as requisições ajax.

    Será criado um serviço que utiliza um `Observable<LoadingType>` para comunicar o status de `LoadingType.LOADING` e `LoadingType.STOPPED`.

    Também será criado um componente para representar visualmente o status de carregamento.
- [x] 03 - O componente

    Para simplificar as classes css no template, foi utilizada a representação de string do enum `LoadingType`, para isto foi utilizada a função `map` do `rxjs`, transformando o enum em string: `.pipe(map(loadingType => loadingType.valueOf()))`.

    Para alterar uma classe css de um componente o angular precisa utilizar um atributo `ngClass`, que foi utilizado em conjunto a um  _pipe async_, que faz com que o html do componente escute as mudanças ocorridas no  atributo `loading$: Observable<string>`.

- [x] 04 - Estilo
- [x] 05 - Interceptador

    Criado o código do `LoadingInterceptor` que utiliza o serviço do `LoadingService` para emitir o status de requisição solicitada/finalizada.

    é necessário declarar o _interceptor_ como provider no módulo:

    ```typescript
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }]
    ```

- [x] 06 - Interceptador que nada faz
- [x] 07 - Sobre interceptador
- [x] 08 - Provider de interceptador
- [x] 09 - Consolidando seu conhecimento

### AULA 04 - Menu da aplicação

- [x] 01 - Projeto da aula anterior
- [x] 02 - Preview do menu
- [x] 03 - O componente

    criado o componente shared/componentes/menu e adicionado ao header.
- [ ] 04 - Estilo e template
- [ ] 05 - Acessibilidade
- [ ] 06 - Menu da aplicação
- [ ] 07 - O evento keyup
- [ ] 08 - Foco de elementos com tab
- [ ] 09 - ngClass
- [ ] 10 - Consolidando seu conhecimento