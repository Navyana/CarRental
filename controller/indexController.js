const { find } = require('../models/Driver');
const Driver = require('../models/Driver')
let nodeGeocoder = require('node-geocoder');


module.exports = {

    create(req, res, next){
        const driver = req.body;

        Driver.create(driver)
            .then(driver => res.send(driver))
            .catch(next)
    },
    locationToCoordinates(req, res){
        let options = {
            provider: 'openstreetmap'
        };
        
        let geoCoder = nodeGeocoder(options);
        location = req.query.location
        geoCoder.geocode(location)

        .then((res) => {
            lat = res[0].latitude
            lng = res[0].longitude
            console.log(lat, lng)
        })
        .catch((err) => {
            console.log(err)
        })
   
        
    }
}

