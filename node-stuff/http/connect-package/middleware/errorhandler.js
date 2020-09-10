var connect = require('connect')

connect()
    .use(function (req, res, next){
        next(new Error('ERROR DETAILS'))
    })
    .use(function (req, res, next){
        res.end('I will never get called')
    })
    .use(function (err, req, res, next){
        console.log('Error handled', err.message)
        console.log('Stacktrace:', err.stack)
        res.writeHead(500)
        res.end('unable to process request')
    })
    .listen(3000)
    console.log('3000')

//error middleware will only be called if an error has occured