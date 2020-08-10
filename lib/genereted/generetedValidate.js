const fs = require("fs");
const chalk = require("chalk");

const verifyDir = require("./verifyDir");

const codeValidate = require("../code/validate");

function generetedValidate(value) {
  console.clear();
  console.log(chalk.blue("CONSTRUINDO -> ") + `Gerando validate ${value}...`);

  if (verifyDir("validate", value)) return;

  fs.writeFile(
    `./src/Validate/${value}/index.ts`,
    codeValidate(value),
    (err) => {
      if (err) {
        console.clear();
        console.log(
          chalk.red("ERRO -> ") + `Não foi possível criar Validate ${value}`
        );

        return;
      }
    }
  );

  console.clear();
  console.log(chalk.green("SUCESSO -> ") + `${value} criando com sucesso!`);
}

module.exports = generetedValidate;
