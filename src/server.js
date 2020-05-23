const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

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

// connect-flash
// This module is used to know the state between pages (html's...)
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// <-- Global Variables -->
// To use in all views
app.use((req, res, next) => {
  // Methos flash of module connect-flash
  res.locals.success_msg = req.flash('success_msg');
  next();
});

// <-- Routes -->
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

// <-- Static Files -->
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
