const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Campground = require('./models/campgrounds');


mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
    })


app.use(bodyParser.json());


//MAKE SURE TO UPDATE THE ALLOW ORIGIN WHEN LAUNCHING FOR PRODUCTION***************************************
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


//serves all files in public directory 
app.use(express.static('public'));


//all camps
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.json(campgrounds);
})


//one camp
app.get('/campgrounds/:campid', async (req, res) => {
    const campid = req.params.campid;
    const campsite = await Campground.findById(campid);
    res.json(campsite);
})



//new camp

//edit camp

//delete camp



app.listen(4500, () => {
    console.log('listening on port 4500')
})