const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Admin:ZJm6BDNtVFYDhSP5@cluster0.qcq5k.mongodb.net/CarRental?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then((data) => {
        console.log('connected to database');
    });

app.use('/', indexRouter)


app.listen(3000)

