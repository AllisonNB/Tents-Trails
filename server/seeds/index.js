const mongoose = require('mongoose');
const { centralLakes } = require('./lakes');
const ratings = require('./ratings');
const Campground = require('../models/campgrounds');


mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
    })



const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 30; i++) {
        const randCampInd = Math.floor(Math.random() * 15);
        const randRatingInd = Math.floor(Math.random() * 3);
        const camp = new Campground({
            lake: `${centralLakes[randCampInd]}`,
            area: 'Central Algonquin',
            route: 'some lake - another lake - another lake',
            difficulty: `${ratings[randRatingInd]}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a exercitationem maxime aspernatur enim perferendis eum pariatur. Sint, a non totam dolorum sapiente quasi sunt ad mollitia magni laboriosam voluptatibus?',
            dateVisited: new Date(),
            images: ['camp1.jpg', 'camp2.jpg']
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('closed connection to database')
})



