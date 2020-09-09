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

**URL de Requisição**
> https://devchallengeapi.herokuapp.com/challenges[?type=[challenge_type]]

Retorna um Array dos objetos de desafios.

#### Exemplo de resposta

```json
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

```json
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

> Content-Type: application/json

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

```json
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

## API de Desenvolvedores

Utilize a API de desenvolvedores quando precisar recuperar a lista de contribuidores do projeto.

:construction: WIP

## API de Newsletter

Utilize a API de Newsletter quando quiser assinar ou cancelar uma assinatura semanal.

:construction: WIP
