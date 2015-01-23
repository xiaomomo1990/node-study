var options = { name: 'option', short: 'o', type: 'string', description: 'Defines an option for your script', example: "'script --opiton=value' or 'script -o value'" };
var argv = require("../node_modules/argv");
var args = argv.option(options).run();

console.log(args);