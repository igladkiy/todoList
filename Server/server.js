const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const cors           = require("cors");
const app            = express();

app.use(cors())
app.use(bodyParser.json());

const port = 8000;

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})