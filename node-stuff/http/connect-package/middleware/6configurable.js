var connect = require('connect')

//closure
function greeter(msg){
    return function(req, res, next){
        res.end(msg)
    }
}

var hello = greeter('hello')
var hi = greeter('hi')

connect()
    .use('/hello', hello)
    .use('/hi', hi)
    .listen(8080)

console.log('8080')

//curl http://localhost:8080/hi
//curl http://localhost:8080/hello