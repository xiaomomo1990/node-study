var argv = require("../node_modules/argv"),
	echo = require("../bin/echo");

var options = { name: 'option', short: 'o', type: 'string', description: 'Defines an option for your script', example: "'script --opiton=value' or 'script -o value'" };
var args = argv.option(options).run();

console.log(echo(args));