const mongoose = require('mongoose');
require('dotenv').load();
mongoose.connect(process.env.MONGOLAB_URI);

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

// Configurate tool mongoose to conet mongodb
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then((db) => console.log('\n<-- Data Base is Connected!-->\n'))
  .catch((err) => console.error(`\nHubo un error -> ${err}\n`));
