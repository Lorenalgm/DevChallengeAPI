# Contribuir

Gostaria de nos ajudar a melhorar o projeto? Veja este guia contribuição para ajudar o DevChallenge a crescer.

## Tabela de conteúdos

- [Sumário](#sumário)
- [Principais formas de contribuir](#principais-formas-de-contribuir)
- [Para começar](#para-começar)
  - [Issues](#issues)
  - [Pull Requests](#pull-requests)
  - [Sugestão de desafios](#sugestão-de-desafios)

## Sumário

Algumas coisas para se ter em mente ao contribuir com o DevChallenge:

- **Seja respeitoso e mantenha sempre uma postura adequada. Qualquer desrespeito com outra pessoa, seja por motivos de etnia, religião, raça, sexo, identidade de gênero, situação financeira, idade, nível de experiência, etc. NÃO serão toleradas;**
- **Embora não seja obrigatório, resuma os títulos de seus commits em uma linha de 50 caractéres. Se necessário, adicione quaisquer outras informações no corpo da mensagem;**
- **Caso sua alteração implique diretamente nos endpoints e serviços disponíveis, atualize também a referência da API;**
- **É preferível que alterações na base do código devem ser acompanhadas com testes. Se for o caso tenha pelo menos um teste para cada caso de uso;**
- **Quaisquer dúvidas, sinta-se livre para perguntar na nossa comunidade no [Discord](https://discord.gg/yvYXhGj).**

### Principais formas de contribuir

Você pode contribuir com o DevChallenge de diversas formas. Sendo criando novos desafios, sugerindo melhorias, indicando falhas no projeto ou submetendo alterações no código. Sinta-se à vontade para contribuir da forma que quiser!

## Para começar

### Issues

O DevChallenge oferece quatro opções de Issues com seus respectivos templates. Caso queira sugerir algo ou tenha alguma dúvida, não hesite em abrir uma nova Issue.

<details>
<summary>Quero reportar um bug</summary>
<br>
Use essa categoria para reportar uma anomalia no comportamento do software.
<br><br>
Caso tenha tempo e saiba como corrigir o erro, sinta-se livre para fazer uma pull request.
<br><br>
</details>

<details>
<summary>Quero solicitar uma alteração na documentação</summary>
<br>
Caso a documentação não seja clara, seja muito complicada, esteja desatualizada ou seja insuficiente, submeta uma issue nessa categoria.
<br><br>
Caso tenha tempo e possa corrigir, sinta-se livre para fazer uma pull request.
<br><br>
</details>

<details>
<summary>Quero sugerir uma funcionalidade</summary>
<br>
Para sugerir novas funcionalidades dentro da plataforma, sinta-se à vontade para submeter uma nova issue nessa categoria!
<br><br>
Fique à vontade para contribuir com um Pull Request caso tenha tempo e queira.
<br><br>
</details>

<details>
<summary>Quero algo que não se encaixa na lista acima</summary>
<br>
Pode ocorrer que o seu problema não se encaixa nas categorias já citadas. Neste caso, submeta aqui.
<br><br>
</details>

<br>
Lembre-se de ser específico ao descrever uma Issue.

### Pull Requests

Pode se assumir que você já tem o repositório clonado. Caso contrário, veja nosso [guia de instalação](README.md#para-começar) para mais detalhes.

Ao fazer sua Pull Request, você será solicitado a preencher uma check-list baseada nas suas alterações. Preencha os itens com [x] ou deixe-os em branco com [ ]. Caso sua Pull Request contenha apenas mudanças na documentação, desconsidere esse passo.

Não se preocupe se nem todos os testes passarem. Você tem todo o direito de submeter sua Pull Request! O seu código ainda será revisado sem discriminação.

<details>
<summary>Exemplo com preenchimento da check-list</summary>
<br>
Corrigir estado incorreto do módulo SkyNet
<br><br>
Há um problema onde algumas IAs estão ganhando uma consciência maligna. O problema pode ser corrigido apenas com o código abaixo:
<br><br>

```js
// skynet-core.js

if (evil) {
  dont();
}
```

**Check-list:**<br>
\- [x] A Pull Request soluciona uma issue.<br>
\- [x] Executar \`npm run test\` passará todas as suítes de testes definidas (Incluindo lint).<br>
\- [ ] Adicionei novos testes para previnir falhas.<br>
\- [ ] Atualizei a documentação de acordo com as alterações no código (Se aplicável).<br>
\- [x] Li e segui o guia de contribuição disponibilizado.<br>

Fix #29

</details>

<details>
<summary>Exemplo sem a check-list</summary>
<br>
Corrigir erro de digitação no guia de instalação
<br><br>
Alguns desenvolvedores estavam reportando problemas para instalar devido ao erro.

Fix #14
Fix #21

</details>

### Sugestão de desafios

Gostaria de submeter um novo desafio? Por favor, [clique aqui](https://lgoesmontes.typeform.com/to/xKHESI) para ser levado ao formulário de submissão.
