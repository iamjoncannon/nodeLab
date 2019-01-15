
let { pwd } = require("./pwd.js")
let { ls } = require("./ls.js")
let request = require('request')

const fs = require('fs')

// console.log(request.get.toString())
// process.stdout.write(request).setEncoding('utf8')

// process.stdout.write('prompt > ');

request
  .get('http://google.com/teapot')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    // console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'))

// process.stdin.on('data', (data) => {

// 	// const cmd = data.toString().trim();

// 	// // process.stdout.write('pwd: \n');
// 	// process.stdout.write(directory)
// 	// process.stdout.write('\n')

// 	// process.exit()

// 	// pwd()
// 	// ls()

// 	let file = './bash.js'

// 	fs.readFile(file, 'utf8', function(err, contents) {
	
// 		process.stdout.write(contents);
	
// 	});

// });


