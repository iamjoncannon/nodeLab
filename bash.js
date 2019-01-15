
let { pwd } = require("./pwd.js")

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {

	// const cmd = data.toString().trim();

	// // process.stdout.write('pwd: \n');
	// process.stdout.write(directory)
	// process.stdout.write('\n')

	// process.exit()

	pwd()

});


