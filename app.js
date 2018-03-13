const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const db = require('./db/snacks')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

const snackRoutes = require('./src/routes/snacks.js')
app.use('/snacks', snackRoutes)

app.use((error, req, res, next) => {
  console.log("do we get here");
  res.status(error.status).json({
    error
  })
})


// app.get('/html', (req, res, next) => {
//   res.status(200).sendFile('./db/test.html', {
//     root: __dirname
//   })
// })

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Snacks are running on port ${port}!`)
  })
}
module.exports = app