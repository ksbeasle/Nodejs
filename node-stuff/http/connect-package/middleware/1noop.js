var connect = require('connect')

var app = connect()
.use(function(req, res, next){
    next()
})
.listen(8080)
console.log('8080')