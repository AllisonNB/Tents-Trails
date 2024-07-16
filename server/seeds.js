const mongoose = require('mongoose');
const Campground = require('./models/campgrounds');


mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
    .then(
        console.log('connection with mongo successful')
    )
    .catch(e => {
        console.log('error in connecting with mongo');
        console.log(e)
    })


const campground = new Campground({
    title: 'Algonquin',
    description: 'lots of trees',
    rating: 4,
})
campground.save().then(campground => {
    console.log(campground)
})
    .catch(e => {
        console.log(e)
    })