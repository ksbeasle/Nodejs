var connect = require('connect')
var util = require('util')

function logit(req, res, next){
    util.log(util.format('Request received: %s, %s', req.method, req.url))
}

connect()
    .use(logit)
    .listen(8888)

console.log('8888')



