const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const {requireAuth, checkUser} = require('./middleware/authMiddleware')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://admin333:password333@node.ut56y.mongodb.net/basic-auth?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRouter)


//cookies example
//can be accessed on any handler

app.get('/setCookie', (req, res)=>{
  res.cookie('newUSer', true)
  //should use secure for https only
  res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true})
  res.send('cookie set')
})

app.get('/getCookie', (req, res)=>{
  const cookie = req.cookies
  console.log(cookie)
  console.log(cookie.isEmployee)
  res.json(req.cookies)
})