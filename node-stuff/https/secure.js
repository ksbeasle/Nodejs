var https = require('https')
var http = require('http')
var fs = require('fs')

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

https.createServer(options, function(req, res){
    res.end('Secure')
}).listen(443)

//redirect from port 80 to https
http.createServer(function(req, res){
    res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url})
    res.end()
}).listen(80)
//curl https://127.0.0.1 -k
//curl http://127.0.0.1 -i