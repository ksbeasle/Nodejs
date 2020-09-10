var https = require('https')
var fs = require('fs')

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

https.createServer(options, function (req, res){
    res.end('hi')
}).listen(3000)
console.log('3000')

//curl https://localhost:3000/ -k