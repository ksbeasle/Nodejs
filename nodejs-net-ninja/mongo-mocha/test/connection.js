const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://admin333:password333@node.ut56y.mongodb.net/basic-mongo?retryWrites=true&w=majority'

//ES6 promises
mongoose.Promise = global.Promise

//connect to the db before tunning the tests
before((done)=>{
    mongoose.connect(dbURI)
    mongoose.connection.once('open', function(){
        // console.log(mongoose.connection.collections.games)
        console.log('Connected to DB ...')
        done()
    }).on('error', function(error){
        console.log(err)
    })
})

beforeEach(function(done) {
    //console.log()
    mongoose.connection.collections.games.drop(function(){
        done()
    })
})

