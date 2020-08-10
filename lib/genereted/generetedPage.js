const fs = require("fs");
const chalk = require("chalk");

const verifyDir = require("./verifyDir");

const codePage = require("../code/page");
const codePageStyle = require("../code/pageStyles");

function generetedPage(value) {
  console.clear();
  console.log(chalk.blue("CONSTRUINDO -> ") + `Gerando page ${value}...`);

  if (verifyDir("pages", value)) return;

  fs.writeFile(`./src/pages/${value}/index.tsx`, codePage(value), (err) => {
    if (err) {
      console.clear();
      console.log(
        chalk.red("ERRO -> ") + `Não foi possível criar page ${value}`
      );

      return;
    }
  });

  fs.writeFile(
    `./src/pages/${value}/styles.ts`,
    codePageStyle(value),
    (err) => {
      if (err) {
        console.clear();
        console.log(
          chalk.red("ERRO -> ") + `Não foi possível criar page styles ${value}`
        );

        return;
      }
    }
  );

  console.clear();
  console.log(chalk.green("SUCESSO -> ") + `${value} criando com sucesso!`);
}

module.exports = generetedPage;
