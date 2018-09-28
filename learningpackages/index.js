var chalk = require("chalk");

var message = chalk.bgYellowBright(chalk.blue("Hello ") + chalk.underline.magentaBright("World"));
console.log(message);