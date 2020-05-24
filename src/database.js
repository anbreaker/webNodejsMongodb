const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
// const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;
const MONGODB_URI = `mongodb+srv://anbreaker:anbreaker_mongo@cluster0-l42v7.mongodb.net/test?retryWrites=true&w=majority`;

// Configurate tool mongoose to conet mongodb
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then((db) => console.log('\n<-- Data Base is Connected!-->\n'))
  .catch((err) => console.error(`\nHubo un error -> ${err}\n`));
