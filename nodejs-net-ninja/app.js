const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// const Game = require('./models/game')
const GameRouter = require('./routes/gameRoutes')

// app.listen(3000, ()=>{
//     console.log('listening on port 3000')
// })

//connect to mongodb - we also listen here so we wont take requests until DB is connected.
const dbURI = 'mongodb+srv://admin333:password333@node.ut56y.mongodb.net/basic-db?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000)
        console.log('Connection to DB successful ... ')
    })
    .catch((err)=>{
        console.log(err)
    })

//middleware
// app.use((req, res, next) => {
//     console.log('incoming request ... ')
//     console.log('Host: ' + req.host)
//     console.log('Path: ' + req.path)
//     console.log('Method: ' + req.method)
//     next()
// })


//static files
app.use(express.static('public'))

// so we can accept form data
app.use(express.urlencoded({extended: true}))

//third party middleware
app.use(morgan('dev'))


app.get('/', (req, res) => {
    // Game.find().then((result)=>{
    //     console.log(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//form
app.get('/add', (req, res) => {
    console.log('OK~~~~~')
    res.sendFile('./views/create.html', {root: __dirname})
    
})

//Game routes
app.use('/game/', GameRouter)

//middleware - if we go through all the routes above and reach here we will send a 404 - should be at the bottom
// app.use((req, res)=>{
//     res.status(404).sendFile('./views/404.html', {root: __dirname})
// })