const Readable = require('stream').Readable
const util = require('util')


function Counter(){
    Readable.call(this)
    this._max = 1000
    this._index = 1
}

util.inherits(Counter, Readable)

Counter.prototype._read = function(){
    var i = this._index++
    if(i > this._max){
        this.push(null)
    }else {
        var str = ' ' + i
        this.push(str)
    }

}



//Usage, same as any other readable stream
var ctr = new Counter()
ctr.pipe(process.stdout)