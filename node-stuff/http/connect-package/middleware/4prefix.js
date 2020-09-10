var connect = require('connect')

function echo(req, res, next){
    req.pipe(res)
}

connect()
    .use('/echo', echo)
    .use(function(req, res){ res.end('hi')})
    .listen(3333)

console.log('3333')

// curl http://:3333 -d "dasdasdsd"

//curl http://localhost:3333/echo -d "dasdasdsd"