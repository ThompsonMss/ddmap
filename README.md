# Severino

Serverino é uma biblioteca CLI (command-line interface) escrita em NodeJS. Sendo um gerador de código para projetos em ReactJS com Typescript (Futuras: React-Native, NodeJS e PHP). A biblioteca é exclusiva e compatível somente com o _boilerplate_ code que está sendo linkado logo a baixo.
Todos os comandos executados com o severino, gera um código de acordo com a arquitetura do boilerplate.

![teste](https://user-images.githubusercontent.com/30129295/89831537-67887580-db34-11ea-816b-ef798ceda05e.jpg)


--------------------------

## Em desenvolvimento 🔨🧱

_O boilerplate de ReactJS c/ Typescript já está funcional._

--------------------------

## Links

[Boilerplate ReactJS c/ Typescript](https://github.com/ThompsonMss/boilerplate-reactjs-typescript)

[Boilerplate React-Native c/ Typescript]() _Em breve_

[Boilerplate NodeJS c/ Typescript]() _Em breve_

[Boilerplate PHP]() _Em breve_

## Instalação

Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar o severino.

```bash
$ npm - g install severino
```

## Como usar

```bash
$ cd seu_repositorio_boilerplate_code

$ severino create SEU_CONTROLLER

```

## Funcionalidades

| Comando                             | Resultado                           |
| ----------------------------------- | ----------------------------------- |
| severino create <params> --validate | Gera somente um Validate            |
| severino create <params> --remote   | Gera somente um Remote              |
| severino create <params> --page     | Gera somente uma PageView           |
| severino create <params> --acoes    | Lista as ações                      |
| severino create-redux <params>      | Gerar todo um module de react-redux |

## Funcionalidades Futuras

> Escrever testes.

## Contribuintes

Solicitações pull são bem-vindas. Para grandes mudanças, abra um problema primeiro para discutir o que você gostaria de mudar.

Please make sure to update tests as appropriate.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
