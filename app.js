const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/router')
const dbConnection = require(`${__dirname}/./database/connect`)
const router = require(`${__dirname}/./routes/router`)


app.use(bodyParser.json());

app.use('/', router);

app.listen(5000, () => console.log('port is running successfully'))

module.exports = app;
