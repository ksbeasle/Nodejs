var connect = require('connect')


connect()
    .use(function (req, res, next){
        next('error has occurred')
    })
    .use(function(req, res, next){
        res.end('I will never get called')
    })
    .listen(3333)

console.log('3333')