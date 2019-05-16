const mongoose = require('mongoose')

const express = require('express')
const stationModel = mongoose.model('Station');

const router = express.Router()

router.get('/', (req, res) => {
    stationModel.find().then(stations => {
        res.json(stations)
    })
})


router.post('/', (req, res) => {
    const station = new stationModel();
    station.name = req.body.name;

    station.save().then((doc) => {
        res.json(doc)
    })
})

router.put('/:id', (req, res) => {
    stationModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then((doc) => {
        res.json(doc)
    })
})

router.delete('/:id', (req, res) => {
    stationModel.findByIdAndRemove(req.params.id).then((doc) => {
        res.json(doc)
    })
})

module.exports = router