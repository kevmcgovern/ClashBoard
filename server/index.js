const express = require("express");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const db = require("./helpers/db.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/clan");

const app = express();

app.use(express.static(__dirname + "/../client"));

// Not sure if these are necesary
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Does anything log?');
  res.sendStatus(200);
});

app.get('/home', (req, res) => {
  console.log('Inside /home')
  db.getClan(res);
});

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
