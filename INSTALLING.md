# Instalação

## Pré-requisitos
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
(Opcional) Crie um arquivo na raiz do projeto chavado `.env`.

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
