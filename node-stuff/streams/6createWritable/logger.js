const writable = require('stream').Writable
const util = require('util')

function Logger(){
    //call base constructor
    writable.call(this)
}

util.inherits(Logger, writable)

Logger.prototype._write = function(chunk){
    console.log(chunk.toString())
}

var l = new Logger()

var readStream = require('fs').createReadStream('test.txt')

readStream.pipe(l)