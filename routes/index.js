const express = require('express')
const indexController = require('../controller/indexController')
 let nodeGeocoder = require('node-geocoder');
const router = express.Router()
const Driver = require('../models/Driver');


router.get('/', async(req,res)=>{
    res.render('index')
})

router.get('/search',async(req, response)=>{
    let lat;
    let lng;
    console.log(req.query.location)
    let options = {
        provider: 'openstreetmap'
    };
    
    let geoCoder = nodeGeocoder(options);
    location = req.query.location
    geoCoder.geocode(location)

    .then((res) => {
        lat = res[0].latitude
        lng = res[0].longitude
        try{
            console.log(lat,lng)
            const drivers =  Driver.find({
                location: {
                    $nearSphere:{
                        $geometry:{
                            type: 'Point',
                            coordinates : [parseFloat(lat), parseFloat(lng)]
                        },
                        $maxDistance: 200000
                    }
                }
            })
            .then(drivers => response.render('search', {drivers:drivers}))
            
            
        }catch{
            res.status(404)
        }
    })
    .catch((err) => {
        console.log(err)
    })
   
})
    

router.post('/', indexController.create);


module.exports = router