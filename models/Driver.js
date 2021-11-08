const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointSchema = require('../schemas/point');

const driverSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    location:{
        type: pointSchema,
        index: '2dsphere'
    }
});

const Driver =  mongoose.model('Driver', driverSchema);
module.exports = Driver;