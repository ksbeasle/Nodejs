var express = require('express')
var serveIndex = require('serve-index')


//directory listing page with search box
var app = express()
            .use(express.static(__dirname + '/public'))
            .use(serveIndex(__dirname + '/public'))
            .listen(8080)

console.log('3000')
//console.log(app)