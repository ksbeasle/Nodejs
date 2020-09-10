var connect = require('connect')


function parseJSON(req, res, next){
    if(req.headers == 'application/json'){
        //load all data
        var data = ''
        req.on('readable', function(){
            data += req.read()
        })
        //try to parse
        req.on('end', function (){
            try {
                req.body = JSON.parse(data)
            } catch(e){}
            next()
        })
    }
    else {
        next()
    }
}

connect()
    .use(parseJSON)
    .use(function (req, res){
        if(req.body){
            res.end('JSON PArsed', + req.body.foo)
        }
        else{
            res.end('no json detected')
        }
    })
    .listen(8888)

console.log('8888')

//curl http://localhost:8888/ -H "content-type: application/json" -d "{\"foo\":123}"