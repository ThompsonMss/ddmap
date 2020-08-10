const { Command } = require("commander");
const chalk = require("chalk");

const generetedValidate = require("./genereted/generetedValidate");
const generetedRemote = require("./genereted/generetedRemote");
const generetedPage = require("./genereted/generetedPage");
const generetedRedux = require("./genereted/generetedRedux");

const program = new Command();

//Definindo Versão
program.version("0.0.1");

//Comandos
program
  .command("create [name]")
  .description("Gerando arquivos de uma nova pagina react.")
  .option("-a, --acoes", "Acoes de comando create")
  .option("-v, --validate", "Gerando somente um validate")
  .option("-r, --remote", "Gerando somente um remote")
  .option("-p, --page", "Gerando somente um page")
  .action(function (name, option) {
    /*
     * Listando opções do comando create
     */

    if (option.acoes) {
      console.log(
        chalk.green("CREATE ACOES: ") +
          `\n\n${chalk.yellow(
            "create SEU_ARQUIVO"
          )} Gerador de Remote, Validate e PageView.
          \n${chalk.yellow("--validate ")} Gerador de Validate.
          \n${chalk.yellow("--remote ")} Gerador de Remote.
          \n${chalk.yellow("--page ")} Gerador de pageView.`
      );
      return;
    }

    //Verificando se tem um nome de arquivo
    if (!name) {
      console.log(
        chalk.red("ERROR -> ") +
          `Voce precisa informar o nome do arquivo!\nEx.: severino create ProdutoCategoria`
      );
      return;
    }

    //Executando todos
    if (!option.validate && !option.remote && !option.page) {
      generetedValidate(name);
      generetedRemote(name);
      generetedPage(name);
    }

    if (option.validate) {
      generetedValidate(name);
    }

    if (option.remote) {
      generetedRemote(name);
    }

    if (option.page) {
      generetedPage(name);
    }
  });

program
  .command("create-redux [name]")
  .description("Gerando module redux.")
  .action(function (name, option) {
    //Verificando se tem um nome de arquivo
    if (!name) {
      console.log(
        chalk.red("ERROR -> ") +
          `Voce precisa informar o nome do module redux!\nEx.: severino create-redux auth`
      );
      return;
    }

    generetedRedux(name);
  });

program.parse(process.argv);
