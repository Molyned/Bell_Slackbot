const express = require('express');
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require("dotenv").config();
const { RTMClient } = require('@slack/rtm-api');

const token = process.env.SLACK_BOT_TOKEN;


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

const { MONGO_USER, MONGO_PASS, MONGO_URL } = process.env;
mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}`, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}
  )
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

app.get('/', (req, res) => {
	res.send("This is the backend for the Tattle bot. If you have any questions")
})

app.post('/add', (req, res) => {
	console.log('getting there')
})



// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

