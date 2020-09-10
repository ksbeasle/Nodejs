const http = require('http')

const server = http.createServer(function( req, res){
    console.log('request starting ...')

    //response
    res.write('\nresponse\n')
    res.end()
})

server.listen(8080)
console.log('\nserver running on 8080...\n')
//curl http://localhost:8080