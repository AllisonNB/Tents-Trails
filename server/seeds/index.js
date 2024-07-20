const mongoose = require('mongoose');
const { centralLakes, areas } = require('./lakes');
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


const getRandIndex = (num) => {
    return Math.floor(Math.random() * num);
}

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 30; i++) {
        const lakeInd = getRandIndex(15);
        const ratingInd = getRandIndex(3);
        const areaInd = getRandIndex(5);

        const camp = new Campground({
            lake: `${centralLakes[lakeInd]}`,
            area: `${areas[areaInd]}`,
            route: 'lake1 - lake2 - lake3',
            difficulty: `${ratings[ratingInd]}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a exercitationem maxime aspernatur enim perferendis eum pariatur. Sint, a non totam dolorum sapiente quasi sunt ad mollitia magni laboriosam voluptatibus?',
            dateVisited: new Date(),
            image: 'https://res.cloudinary.com/dctayuelh/image/upload/v1698592665/YelpCamp/f8ydvy4pi8uwer8e8xxl.jpg'
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('closed connection to database')
})



