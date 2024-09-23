<div align="center"> <h1>Project Costs API</h1> </div>

## 📝 Sobre o projeto
A Project Costs API foi desenvolvida como parte do sistema "Project Costs" para gerenciar os custos dos projetos, oferecendo funcionalidades como criação, edição e exclusão de projetos, além do gerenciamento dos serviços.

## 🛠 Tecnologias utilizadas

-   **JavaScript** - Linguagem de programação
-   **Node.js** - Ambiente de execução para JavaScript no back-end
-   **Express** - Framework para construção de aplicações web em Node.js

## 🖥️ Como configurar o projeto
Siga os passos abaixo para instalar e executar a API em seu ambiente local:

### 1. Clone o repositório:
 
```bash
$ git clone https://github.com/mauricio071/project-costs-api
```

### 2. Acesse o diretório do projeto:

```bash
$ cd project-costs-api
```

### 3. Instale as dependências necessárias:

```bash
$ npm install
```

### 4. Inicialize a API:

```bash 
$ node index.js
```
Agora você pode acessar a API no navegador em http://localhost:3000 (ou na porta indicada pelo terminal).

### 5. Configure o ambiente para o front-end:
Para que o projeto do front-end consiga consumir a API, instale o projeto do front-end [aqui](https://github.com/mauricio071/Make-Your-Burguer) e configure o arquivo .env no projeto com a URL da API. Por exemplo:

```bash 
REACT_APP_BASE_URL=http://localhost:3000
```

Após configurar o arquivo .env, reinicie o servidor do front-end.
