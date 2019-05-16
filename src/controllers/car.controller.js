const mongoose = require('mongoose')

const express = require('express')
const carModel = mongoose.model('Car');

const router = express.Router()

router.get('/', (req, res) => {
    carModel.find().then(car => {
        res.json(car)
    })
})


router.post('/', (req, res) => {
    const car = new carModel();
    car.name = req.body.name;
    car.available = req.body.available;

    car.save().then((doc) => {
        res.json(doc)
    })
})

router.put('/:id', (req, res) => {
    carModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then((doc) => {
        res.json(doc)
    })
})

router.delete('/:id', (req, res) => {
    carModel.findByIdAndRemove(req.params.id).then((doc) => {
        res.json(doc)
    })
})

module.exports = router