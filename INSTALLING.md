# Instalação
Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

## Pré-requisitos
- [Node.js](https://nodejs.org/pt-br/download/) versão 12 ou superior
- Gerenciador de pacotes (Yarn ou NPM)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Instalando
```bash
$ git clone https://github.com/Lorenalgm/DevChallengeAPI.git

$ cd DevChallengeAPI
```

Ou se preferir, faça o [download](https://github.com/Lorenalgm/DevChallengeAPI/archive/master.zip) do projeto.

Instale as dependências utilizando um gerenciador de pacotes:

```bash
$ yarn
# ou
$ npm install
```

Crie um arquivo na raiz do projeto chavado `.env` e cole o conteúdo de `.env.example` nele, ou execute:

```bash
cp .env.example .env
```

Por padrão, o arquivo `.env.example` já tem as variáveis para executar uma instância local do projeto.

Nós disponibilizamos um arquivo docker-compose.yml. Execute-o com o comando abaixo para inicializar uma instância local do MongoDB:

```bash
$ docker-compose up
```

Finalmente, inicialize o servidor executando:

```bash
$ yarn dev
# ou
$ npm run dev
```

Após ter seguido esses passos, uma instância do projeto estará rodando em `http://localhost:3333`
