const fs = require('fs')

//Create readable stream
var readStream = fs.createReadStream('./test.txt')

//Pipe to stdout
readStream.pipe(process.stdout)

