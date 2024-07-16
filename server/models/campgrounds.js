const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    lake: String,
    area: String,
    route: String,
    difficulty: String,
    description: String,
    dateVisited: Date,
    images: [String],
});

module.exports = mongoose.model('Campground', campgroundSchema);


// example
// lake: big crow
// area: central
// route: opeongo, big crow
// difficulty: easy
// dateVisited: June 3, 2020
// description: easy route, would recommend!
// image: URL
