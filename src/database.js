const mongoose = require('mongoose');

// Configurate tool mongoose to conet mongodb
mongoose
  .connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

  .then((db) => console.log('\n<-- Data Base is Connected!-->'))
  .catch((err) => console.error('Hubo un error ->', err));
