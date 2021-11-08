let nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);



geoCoder.geocode('Ongole, prakasam')
    .then((res) => {
        const lat = res[0].latitude
        const lng = res[0].longitude
        console.log(lat, lng)
    })
    .catch((err) => {
        console.log(err)
    })