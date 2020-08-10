const fs = require("fs");
const chalk = require("chalk");

const paths = {
  validate: "./src/Validate/",
  remote: "./src/Remote/",
  pages: "./src/pages/",
};

function verifyDir(path, value) {
  if (fs.existsSync(paths[path] + value)) {
    console.clear();
    console.log(chalk.yellow("ATENCAO -> ") + `Ja existe um ${path} ${value}`);
    return true;
  }

  fs.mkdir(paths[path] + value, { recursive: true }, (err) => {
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

module.exports = verifyDir;
