const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

//Initializations
const app = express();
require('./database');

// <-- Settings -->
// Configuration Port
app.set('port', process.env.PORT || 3000);

// Set views, with path
app.set('views', path.join(__dirname, 'views'));

// Express-handlebars configuration for use mode views
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
);

// Template engine configuration
app.set('view engine', '.hbs');

// <-- Middlewares -->
// Use module Morgan to see request Http
app.use(morgan('dev'));

// Form sends data, understand it, but not accept images etc...(Methos of Express)
app.use(express.urlencoded({extended: false}));

// Use method-override, send _method with consulitng with POST
app.use(methodOverride('_method'));

// app.use(
//   session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// <-- Global Variables -->

// <-- Routes -->
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

// <-- Static Files -->
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
