# Referência de API

## Tabela de conteúdos

- [Desafios](#desafios)
- [Desenvolvedores](#desenvolvedores)
- [Newsletter](#newsletter)

## API de Desafios

Desafios são o principal recurso da nossa plataforma. Utilize a API de desafios sempre que precisar buscar os dados dos desafios atuais.

<!-- Listagem de desafios -->

<details>
<summary style="font-size:24px;color:black"><b>GET: /challenges</b></summary>

#### Função

Listar todos desafios; Filtrar desafios por categoria.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `type` | Categoria do desafio | `query` | `String` | Não |
| `level` | Nível de dificuldade | `query` | `String` | Não |
| `techs` | Tecnologias recomendadas | `query` | `[String]` | Não |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/challenges[?type=[challenge_type]&level=[difficulty_level]&techs=[recommended_technologies]]

Retorna um Array dos objetos de desafios.

#### Exemplo de resposta

```
[
  {
    "techs": [String],
    "images": [String],
    "_id": String,
    "type": String,
    "name": String,
    "description": String,
    "level": String,
    "background": String,
    "github_url": String,
    "brief": String,
    "dev_id": String,
    "createdAt": Date,
    "updatedAt": Date
  },
  {...},
  {...}
]
```

</details>

<!-- Criação de desafios -->

<details>
<summary style="font-size:24px;color:black"><b>POST: /challenges</b></summary>

> Content-Type: application/json

#### Função

Criar um novo desafio.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `type` | Categoria do desafio | `body` | `String` | Sim |
| `name` | Título do desafio | `body` | `String` | Sim |
| `description` | Descrição do desafio | `body` | `String` | Sim |
| `level` | Nível de dificuldade | `body` | `String` | Sim |
| `techs` | Tecnologias recomendadas | `body` | `[String]` | Sim |
| `background` | Capa do desafio | `body` | `String` | Sim |
| `images` | Pré-visualização do resultado | `body` | `[String]` | Sim |
| `github_url` | URL do template | `body` | `String` | Sim |
| `brief` | Sumário do desafio | `body` | `String` | Sim |
| `dev_id` | Submissor do desafio | `body` | `String` | Sim |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/challenges

Retorna o objeto do desafio criado.

#### Exemplo de resposta

```
{
  "techs": [String],
  "images": [String],
  "_id": String,
  "type": String,
  "name": String,
  "description": String,
  "level": String,
  "background": String,
  "github_url": String,
  "brief": String,
  "dev_id": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

</details>

<details>
<summary style="font-size:24px;color:black"><b>GET: /challenges/:id</b></summary>

#### Função

Buscar desafio por ID.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `challenge_id` | UUID do desafio | `path` | `String` | Não |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/challenges/:challenge_id

Retorna os dados do desafio.

#### Exemplo de resposta

```
{
    "techs": [String],
    "images": [String],
    "_id": String,
    "type": String,
    "name": String,
    "description": String,
    "level": String,
    "background": String,
    "github_url": String,
    "brief": String,
    "dev_id": {
      "_id": String,
      "name": String,
      "position": String,
      "bio": String,
      "linkedin": String,
      "github": String,
      "avatar": String,
      "createdAt": Date,
      "updatedAt": Date
    },
    "createdAt": Date,
    "updatedAt": Date
  }
```

</details>

<details>
<summary style="font-size:24px;color:black"><b>PATCH: /challenges/:id</b></summary>

#### Função

Atualizar desafio por ID.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `challenge_id` | UUID do desafio | `path` | `String` | Sim |
| `type` | Categoria do desafio | `body` | `String` | Não |
| `name` | Título do desafio | `body` | `String` | Não |
| `description` | Descrição do desafio | `body` | `String` | Não |
| `level` | Nível de dificuldade | `body` | `String` | Não |
| `techs` | Tecnologias recomendadas | `body` | `[String]` | Não |
| `background` | Capa do desafio | `body` | `String` | Não |
| `images` | Pré-visualização do resultado | `body` | `[String]` | Não |
| `github_url` | URL do template | `body` | `String` | Não |
| `brief` | Sumário do desafio | `body` | `String` | Não |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/challenges/:challenge_id

Retorna os dados do desafio.

#### Exemplo de resposta

```
{
    "techs": [String],
    "images": [String],
    "_id": String,
    "type": String,
    "name": String,
    "description": String,
    "level": String,
    "background": String,
    "github_url": String,
    "brief": String,
    "dev_id": String,
    "createdAt": Date,
    "updatedAt": Date
  }
```

</details>

## API de Desenvolvedores

Utilize a API de desenvolvedores quando precisar recuperar a lista de contribuidores do projeto.

<details>
<summary style="font-size:24px;color:black"><b>GET: /devs</b></summary>

#### Função

Listar contribuidores e suas redes.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| - | - | - | - | - |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/devs

Retorna uma array de objetos de contribuidores

#### Exemplo de resposta

```
[
  {
    "_id": String,
    "name": String,
    "position": String,
    "bio": String,
    "linkedin": String,
    "github": String,
    "avatar": String,
    "createdAt": Date,
    "updatedAt": Date,
  },
  {...},
  {...}
]

```

</details>

<details>
<summary style="font-size:24px;color:black"><b>POST: /devs</b></summary>

> Content-Type: application/json

#### Função

Criar um contribuidor.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `name` | Nome do contribuidor | `body` | `String` | Sim |
| `position` | Cargo do contribuidor | `body` | `String` | Sim |
| `bio` | Biografia do contribuidor | `body` | `String` | Sim |
| `linkedin` | URL do perfil do Linkedin do contribuidor | `body` | `String` | Sim |
| `github` | URL do perfil do Github do contribuidor | `body` | `String` | Sim |
| `avatar` | URL do avatar do Github do contribuidor | `body` | `String` | Sim |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/devs

Retorna objeto contribuidor criado.

#### Exemplo de resposta

```
{
  "_id": String,
  "name": String,
  "position": String,
  "bio": String,
  "linkedin": String,
  "github": String,
  "avatar": String,
  "createdAt": Date,
  "updatedAt": Date,
}
```

</details>

## API de Assinaturas da Newsletter

Utilize a API de Assinaturas quando quiser assinar ou cancelar o recebimento de e-mails semanais.

<details>
<summary style="font-size:24px;color:black"><b>POST: /subscriptions</b></summary>

#### Função

Assinar um e-mail na newsletter.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `email` | O e-mail a ser assinado | `body` | `String` | Sim |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/subscriptions

Retorna um objeto contendo o e-mail registrado.

#### Exemplo de resposta

```
{
  "email": "email@devchallenge.com.br"
}
```

</details>

<details>
<summary style="font-size:24px;color:black"><b>DELETE: /subscriptions</b></summary>

#### Função

Cancelar a assinatura de um e-mail na newsletter.

#### Requisição

**Parâmetros**
| Parâmetro | Descrição | Tipo de Parâmetro | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `email` | O e-mail para ser cancelado a assinatura | `body` | `String` | Sim |

**URL de Requisição**

> https://devchallengeapi.herokuapp.com/subscriptions

Esse endpoint não retorna nada.

</details>
