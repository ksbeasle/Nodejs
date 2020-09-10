const http = require('http')

const server = http.createServer(function(req, res){
    console.log('request headers...')
    console.log(req.headers)

    res.write('headers above')
    res.end()
})

server.listen(8080)
console.log('Server started on 8080')
//curl http://localhost:8080 -i