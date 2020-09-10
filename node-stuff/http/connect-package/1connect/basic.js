var connect = require('connect')
var http = require('http')

//create dispatcher
var app = connect()

//register with http
http.createServer(app).listen(8080)
console.log("8080")
//this will return 404 not found, this is built into connect