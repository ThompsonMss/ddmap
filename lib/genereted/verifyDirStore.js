const fs = require("fs");
const chalk = require("chalk");

const pathsStore = {
  modules: "./src/store/modules/",
};

function verifyDirStore(path, value) {
  if (fs.existsSync(pathsStore[path] + value)) {
    console.clear();
    console.log(chalk.yellow("ATENCAO -> ") + `Ja existe um ${path} ${value}`);
    return true;
  }

  fs.mkdir(pathsStore[path] + value, { recursive: true }, (err) => {
    if (err) {
      console.clear();
      console.log(
        chalk.red("ERRO -> ") + `Já existe um arquivo ${path} ${value}`
      );
      return true;
    }
  });

  return false;
}

module.exports = verifyDirStore;
