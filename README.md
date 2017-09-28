# Documentação

## Sobre 

O projeto é uma Loja Virtual SPA [(Single Page Application)](https://www.portalgsti.com.br/2017/08/single-page-application-spa.html), construída com AngularJS v1.5.11 e Bootstrap 3.3,  que consome uma lista de contatos de uma [API REST](https://pt.stackoverflow.com/questions/45783/o-que-%C3%A9-rest-e-restful), que foi desenvolvida com as tecnologias [Express e NeDB](https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjohZnX9MbWAhUFKiYKHSh3DuUQFggzMAE&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fexpress-nedb-rest&usg=AFQjCNHq3NZjZSmFPpM_PtosGLMeoU0zeA).

O AngularJS utiliza a arquitetura MVW (Model-View-Whatever), focado em, principalmente, separar a View (UI) e o Model (Dados), melhorando assim a escabilidade e testabilidade de uma aplicação.


Bootstrap é um framework front-end que facilita a vida dos desenvolvedores web a criar sites com tecnologia mobile (responsivo) sem ter que digitar uma linha de CSS para “fazer e acontecer”. Não é a toa que o termo “Bootstrap” em inglês significa “inicialização”, algo que possui um ponto de partida..
Além disso, o Bootstrap possui uma diversidade de componentes (plugins) em JavaScript (jQuery) que auxiliam o designer a implementar diversas funcionalidades sem a menor dificuldade, apenas acrescentando algumas configurações no código, sem a necessidade de criar scripts e mais scripts.


Express e Nedb
    -  O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
    - Nedb "[The JavaScript Database](https://github.com/louischatriot/nedb)" resumindo: É um banco de dados que não necessita de instalação, trabalha no formato json e é muito rapido! 


Gulp 
É uma ferramenta de automação de tarefas feita em JavaScript e rodando em cima do Node.js. A idéia do Gulp.js é abstrair esse conhecimento e trabalhar de uma forma mais simplificada, onde você vai precisar conhecer meia dúzia de métodos e ele por trás faz a abstração dos detalhes necessários para a geração do build.


Optei por utilizar o generator front-end chamado [Yeoman](http://yeoman.io) que é composto por 3 ferramentas:

*   YO – Conjunto de geradores que nos permite prototipar
*   Gulp – Gerencia tarefas de forma automatizadas
*   Bower – Gerencia dependências aplicadas no projeto

Foi utilizado o webpack yo gulp-angular


Ao invés de utilizar o GruntJS, foi utilizado o Gulp, por possuir um webpack pronto junto com Angular 1.5.x dentre outras tecnologias.  
[[Leia mais aqui]](https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjE2eC0nMjWAhVIi5AKHUmNDb0QFggqMAA&url=https%3A%2F%2Fgithub.com%2FSwiip%2Fgenerator-gulp-angular&usg=AFQjCNE0dt6R935EfRHM6QYGif948Jn4kg)
*obs*: Não defendo Grunt ou Gulp, ambos possuem o mesmo objetivo ou finalidade: Automatizar e simplificar processos

## Instalação

Clone e inicie a API [Loja-Virtual-Api](https://github.com/MarcusGabriel/loja-virtual-api)

Depois clone este repositório  [Loja Virtual](https://github.com/MarcusGabriel/loja-virtual)

Navegue até o diretório e faça os comandos a seguir para instalar as dependências:

*   npm install
*   bower install
*   gulp serve

Certifique-se de ter o gulp e bower instalados em sua máquina. Caso contrário, rode o seguinte script:

*   npm install -g gulp gulp-cli bower


