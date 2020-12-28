# Instalação
Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

## Tabela de conteúdos
- [Instalação padrão](#instalação-padrão)
- [Instalação com Docker](#instalação-com-docker)

## Instalação padrão
### Pré-requisitos
- [Node.js](https://nodejs.org/pt-br/download/) versão 12 ou superior
- Gerenciador de pacotes (Yarn ou NPM)
- Uma [instância local](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials) ou um [cluster](https://www.mongodb.com/cloud/atlas) do MongoDB rodando

### Clonando o repositório
```bash
$ git clone https://github.com/Lorenalgm/DevChallengeAPI.git

$ cd DevChallengeAPI
```

Ou se preferir, faça o [download](https://github.com/Lorenalgm/DevChallengeAPI/archive/master.zip) do projeto.

### Instalando dependências
```bash
$ yarn
```

ou

```bash
$ npm install
```

### Configurando as variáveis de ambiente
**(OPCIONAL)** Crie um arquivo na raiz do projeto chavado `.env`.

```
APP_URL={A URL em que o seu app está hospedado}

MONGO_URL={Sua string de conexão do MongoDB}
```

Por padrão, o arquivo [`.env.development`](.env.development) já vem com variáveis de ambiente pré-definidas para um ambiente de desenvolvimento.

### Iniciando uma instância local
```bash
$ yarn dev
```

ou

```bash
$ npm run dev
```

E você está pronto para ir!

## Instalação com Docker
Por padrão, instalar o projeto com o Docker Compose o inicializará como um ambiente de desenvolvimento.

### Pré-requisitos
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Clonando o repositório
```bash
$ git clone https://github.com/Lorenalgm/DevChallengeAPI.git

$ cd DevChallengeAPI
```

Ou se preferir, faça o [download](https://github.com/Lorenalgm/DevChallengeAPI/archive/master.zip) do projeto.

### Inicializando os contêineres
```bash
$ docker-compose build && docker-compose up -d
```

**Nota:** O servidor e a instância do MongoDB estará rodando nas portas 3001 e 3002, respectivamente.

E você está pronto para ir!
