const { find } = require('../models/Driver');
const Driver = require('../models/Driver')
let nodeGeocoder = require('node-geocoder');


module.exports = {

    create(req, res, next){
        const driver = req.body;

        Driver.create(driver)
            .then(driver => res.send(driver))
            .catch(next)
    }

}

