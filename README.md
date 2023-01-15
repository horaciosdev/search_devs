<h1>SearchDevs</h1>

<div>
<p>A página do projeto pode ser acessada em -> <a href='https://horaciosdev.github.io/search_devs/' target='_blank'>SearchDevs<a/></p>
</div>

<h2>Versões das tecnologias utilizadas:</h2>

```
ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 15.0.5
Node: 18.12.1
Package Manager: npm 8.19.2
OS: win32 x64

Angular: 15.1.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.0
@angular-devkit/build-angular   15.1.0
@angular-devkit/core            15.1.0
@angular-devkit/schematics      15.0.5
@angular/cli                    15.0.5
@schematics/angular             15.0.5
rxjs                            7.5.7
typescript                      4.8.4
```

<h2>Como instalar esse projeto:</h2>

<h3>Clonar o repositório:</h3>

```
git clone https://github.com/horaciosdev/search_devs.git
```

<h3>Instalar as dependências:</h3>

```
npm install
```

<h3>Servir para o desenvolvimento:</h3>

```
ng serve
```

<div>e navegue até http://localhost:4200/ (4200 é a porta padrão)</div>
<div>ou simplesmente execute:</div>

```
ng serve --open
```

<div>dessa forma ele já abre a página no navegador padrão.</div>

<h3>Fazer a build do projeto:</h3>

```
ng build
```

<div>A build será feita no diretório dist/</div>

<br>

<h2>Sobre o projeto:</h2>

Esse projeto foi realizado como desafio para uma vaga de desenvolvedor júnior.

O objetivo foi construir uma aplicação que busque e exiba o perfil e os repositórios de usuários do github.

O framework escolhido foi o Angular pois é o que venho estudando no último mês e me agrada bastante a maneira como os projetos são organizados nesse framework e o fato de ele ser uma solução bastante completa.

Quando trabalho sozinho gosto de já colocar a mão na massa logo no início de meus projetos, isso faz com que o começo pareça (ou realmente seja) bastante caótico, a organização vai se dando a medida que o projeto se desenvolve, com bastante refatoração, algo que aprecio bastante.

O projeto ficou estruturado de acordo com os padrões do Angular, com pastas para os components, pages, interfaces e services. (Mais abaixo há um modelo da árvore estrutural de arquivos do projeto)

Para os ícones, não fiquei satisfeito com o uso de módulos prontos, então criei um componente próprio para ícones e um serviço que retorna os ícones desejados, criei um arquivo de mock para os ícones que eu usaria. Posteriormente o serviço pode receber atualizações com capacidade de utilizar ícones de diversas fontes (talvez se transforme em um módulo como o react-icons que é bem interessante).

Devido ao limite de consultas imposto pelo github, frequentemente utilizei mocks com os dados de retorno para o desenvolvimento.

É evidente que muitas melhorias podem ser adicionadas, incluindo novas funcionalidades, e melhorias nos métodos utilizados. Mas no geral acredito que fiz um bom trabalho e espero poder continuar evoluindo.

Modelo da árvore estrutural de arquivos do projeto:

<div>📦src</div>
<div> ┣ 📂app</div>
<div> ┃ ┣ 📂components</div>
<div> ┃ ┃ ┣ 📂icon</div>
<div> ┃ ┃ ┃ ┣ 📜icon.component.html</div>
<div> ┃ ┃ ┃ ┣ 📜icon.component.scss</div>
<div> ┃ ┃ ┃ ┣ 📜icon.component.spec.ts</div>
<div> ┃ ┃ ┃ ┗ 📜icon.component.ts</div>
<div> ┃ ┃ ┣ 📂loader</div>
<div> ┃ ┃ ┃ ┣ 📜loader.component.html</div>
<div> ┃ ┃ ┃ ┣ 📜loader.component.scss</div>
<div> ┃ ┃ ┃ ┣ 📜loader.component.spec.ts</div>
<div> ┃ ┃ ┃ ┗ 📜loader.component.ts</div>
<div> ┃ ┃ ┣ 📂pages</div>
<div> ┃ ┃ ┃ ┣ 📂home</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜home.component.html</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜home.component.scss</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜home.component.spec.ts</div>
<div> ┃ ┃ ┃ ┃ ┗ 📜home.component.ts</div>
<div> ┃ ┃ ┃ ┗ 📂perfil</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜perfil.component.html</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜perfil.component.scss</div>
<div> ┃ ┃ ┃ ┃ ┣ 📜perfil.component.spec.ts</div>
<div> ┃ ┃ ┃ ┃ ┗ 📜perfil.component.ts</div>
<div> ┃ ┃ ┣ 📂profile</div>
<div> ┃ ┃ ┃ ┣ 📜profile.component.html</div>
<div> ┃ ┃ ┃ ┣ 📜profile.component.scss</div>
<div> ┃ ┃ ┃ ┣ 📜profile.component.spec.ts</div>
<div> ┃ ┃ ┃ ┗ 📜profile.component.ts</div>
<div> ┃ ┃ ┗ 📂repositories</div>
<div> ┃ ┃ ┃ ┣ 📜repositories.component.html</div>
<div> ┃ ┃ ┃ ┣ 📜repositories.component.scss</div>
<div> ┃ ┃ ┃ ┣ 📜repositories.component.spec.ts</div>
<div> ┃ ┃ ┃ ┗ 📜repositories.component.ts</div>
<div> ┃ ┣ 📂interfaces</div>
<div> ┃ ┃ ┗ 📜icon.ts</div>
<div> ┃ ┣ 📂services</div>
<div> ┃ ┃ ┣ 📜date-calculator.service.spec.ts</div>
<div> ┃ ┃ ┣ 📜date-calculator.service.ts</div>
<div> ┃ ┃ ┣ 📜icon.service.spec.ts</div>
<div> ┃ ┃ ┣ 📜icon.service.ts</div>
<div> ┃ ┃ ┣ 📜profile.service.spec.ts</div>
<div> ┃ ┃ ┗ 📜profile.service.ts</div>
<div> ┃ ┣ 📜app-routing.module.ts</div>
<div> ┃ ┣ 📜app.component.html</div>
<div> ┃ ┣ 📜app.component.scss</div>
<div> ┃ ┣ 📜app.component.spec.ts</div>
<div> ┃ ┣ 📜app.component.ts</div>
<div> ┃ ┣ 📜app.module.ts</div>
<div> ┃ ┗ 📜mock-icons.ts</div>
<div> ┣ 📂assets</div>
<div> ┃ ┗ 📜.gitkeep</div>
<div> ┣ 📂styles</div>
<div> ┃ ┗ 📂variables</div>
<div> ┃ ┃ ┣ 📜colors.scss</div>
<div> ┃ ┃ ┗ 📜typography.scss</div>
<div> ┣ 📜favicon.ico</div>
<div> ┣ 📜index.html</div>
<div> ┣ 📜main.ts</div>
<div> ┗ 📜styles.scss</div>
