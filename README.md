# react_nodejs_e-times

<h1>EM DESENVOLVIMENTO!</h1>

<h2>Sobre</h2>

<h3>
Projeto Full Stack com Front End para criar times e jogadores de e-Sports e no Back End uma API para validação e armazenamento de dados

  
Front End:
Aplicação React utilizando TypeScript com biblioteca ContextAPI para gerenciamento de estado e React Router DOM para roteamento de componentes, Aplicação com 2 páginas, Página “/” para listar, cadastrar, editar, deletar times e cadastrar jogador e Página “/times” para listar um time, editar e deletar seus jogadores, componentes estilizados utilizando BootStrap e React Hook Form para gerenciamento de formulários, testes unitários e de integração feitos com Jest e Testing Library, ambiente de desenvolvimento criado em container Docker utilizando Dockerfile para multi stage building e Docker Compose para orquestração dos containers.

Back End:
REST API com rotas para cadastro, edições, exclusões e listagem de times e jogadores, feita com JavaScript utilizando o runtime NodeJS com express
e TypeScript, autenticando dados de entrada com Joi, criando models, migrations e armazenando os dados no banco de dados PostgreSQL com ORM Prisma, testes unitários e de integração feitos com Jest e SuperTest, ambientes de produção e desenvolvimento criados em containers Docker utilizando Dockerfile para multi stage building e Docker Compose.
</h3>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <br>
  <li>NPM</li>
  <br>
  <li>Docker</li>
  <br>
  <li>Docker Compose</li>
  <br>
</ul>

<h2>MODO DE USO</h2>

<h3>GIT</h3>
<hr>

<p>FAÇA O DOWNLOAD DOS ARQUIVOS OU USE SSH:<br><code>git pull git@github.com:joaov1ct0r/react_nodejs_e-times.git</code></p>

<h3>VARIAVEIS DE AMBIENTE</h3>
<hr>

<p>CRIE O ARQUIVO .env E ALTERE AS VARIAVEIS DE AMBIENTE COM SEUS DADOS(USE .env.example COMO EXEMPLO)</p>

<ul>
  <li>SERVER_HOST = HOST DO SEU SERVER</li>
  <li>SERVER_PORT = PORTA QUE VOCÊ QUEIRA RODAR O SERVIDOR</li>
  <li>DB_HOST = ROTA PARA SEU BANCO DE DADOS</li>
  <li>DB_USER = SEU USUARIO DO BANCO DE DADOS</li>
  <li>DB_PASSWORD = SENHA DO SEU BANCO DE DADOS</li>
  <li>DB_DATABASE = NOME DO SEU BANCO DE DADOS</li>
  <li>DB_PORT = PORTA DO SEU BANCO DE DADOS</li>
  <li>NODE_ENV = AMBIENTE DO SEU NODE</li>
</ul>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA ESCOLHA O MODO EM QUE QUER RODAR O PROJETO:
  <br>PRODUÇÃO: <br>DIGITE EM SEU TERMINAL: <code>sudo docker compose up --build -d</code>

<br>DESENVOLVIMENTO: <br>DIGITE EM SEU TERMINAL: <code>sudo docker compose up -f docker-compose.dev.yaml --build -d</code>

</p>

<p>APOS INICIAR O PROJETO EM SEU MODO PREFERIDO VA PARA A ROTA:<br><code>http://0.0.0.0:3000/api/docs</code>
PARA VER AS ROTAS DISPONIVEIS PARA FAZER AS REQUISIÇÕES</p>
