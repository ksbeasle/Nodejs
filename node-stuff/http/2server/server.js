const http = require('http')
const fs = require('fs')

//404 utility function
function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'})
    response.write('Error 404')
    response.end()
}

//server
const server = http.createServer(function(req, res){
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(202, {'content-type': 'text/html'})
        fs.createReadStream('./public/index.html').pipe(res)
    }else {
        send404(res)
    }
}).listen(8080)
console.log('server running on 8080')



