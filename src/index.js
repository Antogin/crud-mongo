require('./models/db')

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const stationConctoller = require('./controllers/station.controller')



app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})

app.use('/station', stationConctoller)

app.use('/static', express.static('static'))

app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

app.listen(3000, () => console.info(`Server has started on 3000`))