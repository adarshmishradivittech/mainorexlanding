var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { static, validation } = require('./controllers/middlewares/dashboard_middleware')
var path = require('path')
const mongoose = require('mongoose')
const { mongourl } = require('./config/key')
var session = require('express-session')
const pagesRouter = require('./controllers/routes/pages_route')
const dashboardRouter = require('./controllers/routes/dashboard_route')
var serveStatic = require('serve-static')
const apiRouter = require('./controllers/routes/api_route')

const port = process.env.PORT || 4000;


//Middleware

app.set('view engine', 'ejs')




app.use(session({
  secret: 'adarsh',
  resave: false,
  saveUninitialized: true,

}))


app.use(express.static('public'));
app.use(serveStatic(path.join(__dirname, 'views/pages')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Mongodb connection


mongoose.connect(mongourl);


// custom Middleware





// Routes


app.use('/', pagesRouter)


app.use('/admin', dashboardRouter)


app.use('/api', apiRouter)



app.get('/ejs', function (req, res) {

  res.render('adarsh', { name: "adarsh" })


})



//Lissen
app.listen(port);