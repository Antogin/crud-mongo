const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
    name: String,
  })
  
  mongoose.model('Station', StationSchema)
  module.exports = StationSchema