# Instruções Basicas para Uso do Boilerplate

## Tema Customizavel do Ant Design

Dentro do diretório raiz do projeto, abra `webpack.config.js`, dentro de rules > options > modifyVars, reescreva as variáveis seguindo a documentação do ant design [instruções](https://ant.design/docs/react/customize-theme).

## Configurações Gerais

### Mudar o nome do diretório e outras configurações do NextJS

Na raiz do projeto, abra `next.config.js`, dentro de withTypescript > withLess > withCss modifique o atributo `distDir` para mudar o nome da pasta da build.

### Configuração do TSLint & Typescript

Na raiz do projeto, localize o arquivo `tsconfig.json` para modificar as regras básicas do typescript e `relative path's` e localize `tslint.json` para modificar regras de verificação de sintaxe do tslint para arquivos typescript(.ts|.tsx).

### Babel Configuration

Na raiz do projeto está localizado a configuração básica para transpilar o código typescript e nextjs, a configuração do antd para usar o less/css e o preset da configuração do jest para rodar testes unitários, de integração, de componentes e end to end testes.

# Instruções de Desenvolvimento, Construção e Execução

Execute `$ yarn`.
Execute `$ yarn dev` para iniciar o ambiente de desenvolvimento do projeto.
Execute `$ yarn build && yarn start` para construir e executar o ambiente de produção do projeto.

# Execução dos Testes

execute `$ yarn test` e espere o resultado dos testes.

# Tecnologias Aplicadas no Projeto

## SSR (Server Side Renderer)

Foi usado o nextjs para configurar a renderização pelo lado do servidor (SSR), sendo
uma ferramenta já consolidada no mercado usada por diversas empresas de grande porte que agiliza a performance renderizando uma tela por vez.

## TypeScript

Usado para melhorar e metrificar a codificação do projeto.

## Less

CSS pre-processador para construir um css mais otimizado

## Antd

Framework CSS modular para ajudar na criação da estilização dos componentes.

## Jest & Enzyme & Puppeteer

Jest é um Framework Web para testes usado para criar testes automatizados na aplicação em conjunto com o enzyme para montar uma renderização virtual dos componentes viabilizando os testes de componentes, o Jest pode ser usado para testes unitários, de integração e end to end também com o auxilio do Puppeteer para a simulação do Browser além de ter o suporte direto do Facebook e de outras empresas de renome.

## Redux & Redux Saga

Redux é usado para ajudar no fluxo de data da aplicação disponibilizando a troca de estados entre os componentes sem um componente precisar tomar ciencia da existência do outro, os dados ficam disponiveis em um local de comum acesso para todos os componentes do projeto enquanto o redux-saga serve como um middleware para trabalha a interceptação de requisições AJAX ou outra atividade que precise ser feito antes da distribuição dos dados sem quebrar o fluxo de dados e mantendo performance.

## Api Sauce

Ferramenta utilizada para trabalhar requisições AJAX baseada no axios com algumas funções adicionais.
