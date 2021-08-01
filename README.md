# ddmap

ddmap é um CLI escrito em NodeJS para facilitar o upload do sourcemap de uma versão específica da sua aplicação em React Native para o monitoramento de erros no ([Bugsnag](https://www.bugsnag.com/)).

ddmap atualmente só da suporte ao [Bugsnag](https://www.bugsnag.com/) para aplicações React Native.

Plataforma: [Monitoramento de erros Bugsnag](https://www.bugsnag.com/).

## Uso

1º Instale globalmente o ddmap em sua máquina com NPM.
``` 
npm i ddmap
```
OU use com o utilitário NPX

```
npx ddmap --args
```

2º Diga ao ddmap qual é sua API_KEY do Bugsnag. (Somente no primeiro uso) 
```
ddmap --set-key=SUA_API_KEY
```

3º Suba o sourcemap (Android, IOS) da sua aplicação react native para uma nova versão.
```
ddmap --set-version=2.2.45 --android --ios
```

Pronto! Sua nova versão já foi mapeada pelo Bugsnag.

## Comandos

| Comando  | Descrição  |
|---|---|
| ddmap --help  | Listagem de todos os comandos  |
| ddmap --set-key  | Setando API-KEY do bugsnag no ddmap  |
| ddmap --set-version | Setando uma nova versão  |
| ddmap --android | Subindo source map do Android (Necessário o comanda --set-version) |
| ddmap --ios | Subindo source map do IOs (Necessário o comanda --set-version) |

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
