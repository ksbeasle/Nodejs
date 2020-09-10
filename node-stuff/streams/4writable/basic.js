const fs = require('fs')

var writeStream = fs.createWriteStream('test_write_stream.txt')

writeStream.write('Some text here ... ')
//use 'end' when you are done
writeStream.end('DONE')