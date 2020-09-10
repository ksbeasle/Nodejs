const express = require('express') //handler
const morgan = require('morgan') //http middleware
const mongoose = require('mongoose') //Used to communicate with our mongo DB
const chalk = require('chalk') //add colored text to logging

//App
const app = express()

//Mongo username
let user = process.env.MONGO_USER
//Mongo password
let pass = process.env.MONGO_PASS


//Connect to DB -- We will wait until a connection is made to the DB before listening for requests
mongoose.connect('mongodb+srv://'+user+':'+pass+'@node.ut56y.mongodb.net/project-1-games?retryWrites=true&w=majority', 
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true}
    ).then(() => {
        app.listen(3000, () => {
            console.log(chalk.blueBright.bgBlack.bold.underline('Database connected! Now Listening on port: 3000'))
        })
    }).catch((err) => {
        console.log(chalk.red.bgBlack.bold.underline(err.message))
    })


//log all requests
app.use(morgan('common'))

/* --- Basic Routes --- */

//Return all records from the DB
app.get('/', (req, res) => {
    res.send('Home')
    res.end()
})

//Return information on how to interact with this application
app.get('/help', (req, res) => {

})




