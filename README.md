<div align="center">
  <a href="https://devchallenge.now.sh/">
    <img src="https://trello-attachments.s3.amazonaws.com/590fa896d2d25e50583de620/500x500/0bdcc819ea145cb0167619c6d00f2174/D.png" alt="Logo" width="100" height="100">
  </a>
  <h1>DevChallenge RESTful API</h1>
  <br>
  <p><b>Melhore suas habilidades através de desafios de front-end, back-end e mobile!</b></p>
  <sub>Procurando pelo repositório do aplicativo web? Acesse <a href="https://github.com/Lorenalgm/DevChallenge">aqui</a>!</sub>
  <br>
</div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Tabela de conteúdos

- [Sobre](#sobre)
- [Feito com](#feito-com)
- [Para começar](#para-começar)
  - [Instalação padrão](#instalação-padrão)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalando dependências](#instalando-dependências)
    - [Inicializando uma instância local](#inicializando-uma-instância-local)
  - [Instalação com Docker](#instalação-com-docker)
    - [Pré-requisitos](#pré-requisitos-1)
    - [Inicializando os contêineres](#inicializando-os-contêineres)
- [Referência de API](#referência-de-api)
- [Como contribuir](#como-contribuir)
- [Autores](#autores)
- [Licença](#licença)
- [Nossa comunidade](#nossa-comunidade)

## Sobre

O DevChallenge é um projeto que visa contribuir com a evolução de desenvolvedores, disponibilizando desafios para que possam praticar, melhorar suas skills e criarem seus portfólios.

## Feito com

- [Node.js](https://nodejs.org/pt-br/) - JavaScript runtime
- [Express](https://expressjs.com/pt-br/) - O framework web utilizado
- [MongoDB](https://www.mongodb.com/) - Base de dados não relacional
- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes e dependências

## Para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

```bash
git clone https://github.com/Lorenalgm/DevChallengeAPI.git

cd DevChallengeAPI
```

### Instalação padrão

#### Pré-requisitos

- [Node.js](https://nodejs.org/pt-br/) versão 12 ou superior
- Um gerenciador de dependências - Yarn ou NPM
- Uma instância local ou um cluster do [MongoDB](https://www.mongodb.com/)

#### Instalando dependências

```bash
npm install
```

ou

```bash
yarn
```

#### Inicializando uma instância local

```bash
npm run dev
```

ou

```bash
yarn dev
```

### Instalação com Docker

Caso prefira inicializar um ambiente de desenvolvimento com Docker, temos um arquivo `docker-compose.yml` preparado com as configurações necessárias.

#### Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### Inicializando os contêineres

```bash
docker-compose up -d --build
```

## Referência de API

Gostaria de ver quais serviços são disponibilizados por nossa API? Veja a [REFERENCE.md](REFERENCE.md) para detalhes.

## Como contribuir

Gostaria de contribuir com o projeto? Acesse [CONTRIBUTING.md](CONTRIBUTING.md) para o manual completo de contribuição.

## Autores

- **Lorena Montes** - _Trabalho inicial_ - [Lorenalgm](https://github.com/Lorenalgm)

Veja também a lista de [contribuidores](https://devchallenge.now.sh/devs) que ajudaram no projeto!

## Licença

Este projeto é licenciado sob a Licença MIT - veja [LICENSE.md](LICENSE.md) para detalhes.

## Nossa comunidade

Nosso objetivo é ajudar cada vez mais na evolução de desenvolvedores! Por isso, temos uma comunidade exclusiva do DevChallenge no Discord. Interessado? [Participe](https://discord.gg/yvYXhGj)!

[forks-shield]: https://img.shields.io/github/forks/Lorenalgm/DevChallengeAPI.svg?style=flat-square
[forks-url]: https://github.com/Lorenalgm/DevChallengeAPI/network/members
[stars-shield]: https://img.shields.io/github/stars/Lorenalgm/DevChallengeAPI.svg?style=flat-square
[stars-url]: https://github.com/Lorenalgm/DevChallengeAPI/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lorenalgm/DevChallengeAPI.svg?style=flat-square
[issues-url]: https://github.com/Lorenalgm/DevChallengeAPI/issues
