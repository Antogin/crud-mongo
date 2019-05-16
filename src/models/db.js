let mongoose = require('mongoose');

const server = 'ds221609.mlab.com:21609';
const database = 'rest-api-workshop';
const user = 'theoutlander';
mongoose.connect(`mongodb://localhost:27017/virtuoDB`, { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('connected');
	} else {
		console.log(err);
	}
});

const StationModel = require('./station.model');
const CarModel = require('./car.model');

mongoose.model('Station', StationModel);
mongoose.model('Car', CarModel);
