const mongoose = require('mongoose');

// Configurate tool mongoose to conet mongodb
mongoose
  .connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

  .then((db) => console.log('\n<-- Data Base is Connected!-->\n'))
  .catch((err) => console.error(`\nHubo un error -> ${err}\n`));
