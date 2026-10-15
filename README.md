# Code Programado

Site institucional publicado no GitHub Pages. A página inicial apresenta os cursos e serviços; as páginas internas compartilham a navegação e a identidade visual da marca.

## Identidade visual

- `styles/site.css` centraliza as cores, tipografia e componentes usados nas páginas internas.
- `js/site-nav.js` monta o cabeçalho responsivo e o rodapé dessas páginas.
- A página inicial fica em `index.html` e usa as cores azul e ciano da logo, com destaque verde para o WhatsApp.

## Como editar cursos, preços e divulgações

1. Abra a pasta do site no Visual Studio Code.
2. Abra `data/site-content.json`.
3. Adicione os cursos em `courses` e as divulgações em `promotions`, seguindo os exemplos abaixo.
4. Salve o arquivo, confira o resultado com a extensão Live Server e publique as alterações no GitHub para atualizar o GitHub Pages.

Substitua o conteúdo de `site-content.json` por um modelo como este e ajuste os dados:

```json
{
  "courses": [
    {
      "title": "Informática Básica",
      "description": "Aprenda a usar o computador, navegar na internet e trabalhar com arquivos.",
      "price": "R$ 250,00",
      "duration": "20 horas",
      "topics": [
        "Conhecendo o computador",
        "Uso do teclado e do mouse",
        "Windows e organização de arquivos",
        "Internet e e-mail"
      ],
      "buttonText": "Quero me matricular",
      "active": true
    }
  ],
  "promotions": [
    {
      "title": "Turmas abertas",
      "description": "Inscrições abertas para as próximas turmas.",
      "image": "foto/experiencia.png",
      "buttonText": "Fale conosco",
      "active": true
    }
  ]
}
```

Os exemplos são apenas modelos: troque textos e valores pelos dados reais antes de publicá-los. Os campos `price`, `duration`, `topics`, `image` e `buttonText` são opcionais. Em `topics`, coloque os assuntos como uma lista de textos, um por item. Para esconder temporariamente um curso ou uma divulgação sem apagá-los, use `"active": false`. Os botões abrem uma conversa no WhatsApp cadastrado no site; ao adicionar um `link`, ele será usado no lugar do WhatsApp.

O arquivo já vem com um curso e uma divulgação promocionais demonstrativos, identificados como exemplos e exibidos no site. Substitua os textos e valores pelas informações corretas antes de divulgar, ou defina `"active": false` enquanto prepara os dados.

`site-content.json` contém somente conteúdo público; não coloque senhas ou informações privadas nesse arquivo. Alterações feitas no VS Code só aparecem no site depois de salvar, fazer commit/push para o GitHub e aguardar a publicação do GitHub Pages.
