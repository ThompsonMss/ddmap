const fs = require("fs");
const chalk = require("chalk");

const verifyDirStore = require("./verifyDirStore");

const { types, reducer, actions } = require("../code/redux");

function generetedRedux(value) {
  console.clear();
  console.log(
    chalk.blue("CONSTRUINDO -> ") + `Gerando module redux ${value}...`
  );

  if (verifyDirStore("modules", value)) return;

  fs.writeFile(`./src/store/modules/${value}/types.ts`, types(value), (err) => {
    if (err) {
      console.clear();
      console.log(
        chalk.red("ERRO -> ") + `Não foi possível criar module redux ${value}`
      );

      return;
    }
  });

  fs.writeFile(
    `./src/store/modules/${value}/reducer.ts`,
    reducer(value),
    (err) => {
      if (err) {
        console.clear();
        console.log(
          chalk.red("ERRO -> ") + `Não foi possível criar module redux ${value}`
        );

        return;
      }
    }
  );

  fs.writeFile(
    `./src/store/modules/${value}/actions.ts`,
    actions(value),
    (err) => {
      if (err) {
        console.clear();
        console.log(
          chalk.red("ERRO -> ") + `Não foi possível criar module redux ${value}`
        );

        return;
      }
    }
  );

  console.clear();
  console.log(chalk.green("SUCESSO -> ") + `${value} criando com sucesso!`);
}

module.exports = generetedRedux;
