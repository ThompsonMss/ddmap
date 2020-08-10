const fs = require("fs");
const chalk = require("chalk");

const verifyDir = require("./verifyDir");

const codeRemote = require("../code/remote");

function generetedRemote(value) {
  console.clear();
  console.log(chalk.blue("CONSTRUINDO -> ") + `Gerando remote ${value}...`);

  if (verifyDir("remote", value)) return;

  fs.writeFile(`./src/Remote/${value}/index.ts`, codeRemote(value), (err) => {
    if (err) {
      console.clear();
      console.log(
        chalk.red("ERRO -> ") + `Não foi possível criar Remote ${value}`
      );

      return;
    }
  });

  console.clear();
  console.log(chalk.green("SUCESSO -> ") + `${value} criando com sucesso!`);
}

module.exports = generetedRemote;
