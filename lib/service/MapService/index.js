const chalk = require("chalk");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function mapAndroid(version) {
  try {
    await exec(
      "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android-release.bundle --sourcemap-output android-release.bundle.map"
    );

    await exec(
      "curl --http1.1 https://upload.bugsnag.com/react-native-source-map -F apiKey=a1337c5c0176d827e0c5aa005a08ec41 -F appVersion=" +
        `${version}` +
        " -F dev=false -F platform=android -F sourceMap=@android-release.bundle.map -F bundle=@android-release.bundle -F projectRoot=`pwd`"
    );

    console.log(
      chalk.green("SUCESSO - ") + `Upload de source map concluido com sucesso.`
    );
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
  }
}

async function mapIos(version) {
  try {
    await exec(
      "npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios-release.bundle --sourcemap-output ios-release.bundle.map"
    );

    await exec(
      "curl --http1.1 https://upload.bugsnag.com/react-native-source-map -F apiKey=a1337c5c0176d827e0c5aa005a08ec41 -F appVersion=" +
        `${version}` +
        " -F dev=false -F platform=ios -F sourceMap=@ios-release.bundle.map -F bundle=@ios-release.bundle -F projectRoot=`pwd`"
    );

    console.log(
      chalk.green("SUCESSO - ") + `Upload de source map concluido com sucesso.`
    );
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
  }
}

const MapService = {
  mapAndroid,
  mapIos,
};

module.exports = MapService;
