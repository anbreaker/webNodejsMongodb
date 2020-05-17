const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();

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
app.set('views engine', '.hbs');

// <-- Middlewares -->
// Form sends data, understand it, but not accept images etc...(Methos of Express)
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
  })
);

// <-- Global Variables -->

// <-- Routes -->
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// <-- Static Files -->
app.use(express.static(path.join(__dirname, 'public')));

// <-- Server listenning -->
const server = app.listen(app.get('port'), () => {
  console.log(`Listening server on Port -> http://localhost:${server.address().port}`);
});
