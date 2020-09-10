var fs = require('fs')
var gz = require('zlib').createGzip()

/* 
    creates a read stream from a file, pipes it through a zip transform stream, and then pipes
    it to a writable file stream. This creates a zip file on the file system.
 */

 var input = fs.createReadStream('./test.txt')
 var out = fs.createWriteStream('./test.txt.gz')

 //pipe chain
 input.pipe(gz).pipe(out)