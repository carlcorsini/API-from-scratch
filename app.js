const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const db = require('./db')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', function(req, rex, next) {
  console.log(db.snicks);
})


app.listen(console.log(`Listening on ${port}`))

module.exports = app