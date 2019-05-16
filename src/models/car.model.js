const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
    available: Boolean,
    station: String
});

mongoose.model('Car', CarSchema);
module.exports = CarSchema;
