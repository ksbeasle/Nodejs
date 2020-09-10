var express = require('express')
var bodyParser = require('body-parser')

var app = express()
        .use(bodyParser())
        .use(function (req, res){
            if(req.body.foo){
                res.end('Body Parsed \n: ', req.body.foo)
                console.log(req.body.foo)
            }
            else {
                console.log('foo not found in body')
            }
        })
        .use(function (err, req, res, next){
            res.end('invalid body')
        })
        .listen(8080)
        //curl http://127.0.0.1:8080/ -H "content-type":"application/json" -d "{\"foo\":123}"