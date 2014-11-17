var argv = require("../node_modules/argv"),
	echo = require("../lib/echo");

console.log(echo(argv.join(' ')));
