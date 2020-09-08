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

    O guarda de rotas foi criado como um serviço que implementa `CanActivate` para que possa ser injetado em `app.routing.module.ts` no item do array de rotas: `canActivate: [AuthGuardService]`
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
- [ ] 07 - Refinando o uso de serviços
- [ ] 08 - Interceptadores e envio do token
- [ ] 09 - Consolidando seu conhecimento
- [ ] 10 - Considerações finais
- [ ] 11 - Projeto completo
- [ ] 12 - O que aprendemos?