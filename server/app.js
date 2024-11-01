require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Campground = require('./models/campgrounds');
const Review = require('./models/reviews');


//environ variables
const DBURL = process.env.DBURL;
const PORT = process.env.PORT || 4500;

mongoose.connect(DBURL)
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
    });



const allowedOrigins = ['https://tentsandtrails.netlify.app', 'http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));


//serves all files in public directory 
app.use(express.static('public'));


//parsing form data
app.use(bodyParser.json());


//all camps
app.get('campgrounds', async (req, res) => {
    try {
        const campgrounds = await Campground.find({});
        res.json(campgrounds);
    } catch (error) {
        res.status(500).json({ message: 'Server error in retrieving campgrounds' });
    }
});


//new camp
app.post('/campgrounds/new', async (req, res) => {
    try {
        const campground = new Campground(req.body);
        await campground.save();
        res.status(200).json({ message: 'Created camp!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error with creating new camp' });
    }
});


//edit camp 
app.patch('/campgrounds/:campid/edit', async (req, res) => {
    try {
        const {campid} = req.params;
        await Campground.findByIdAndUpdate(campid, { ...req.body });
        res.status(200).json({ message: 'Edited camp!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error with editing camp' });
    }
});


//show one camp
app.get('/campgrounds/:campid', async (req, res) => {
    try {
        const {campid} = req.params;
        const campsite = await Campground.findById(campid).populate('reviews');
        res.json(campsite);
    } catch (error) {
        res.status(500).json({ message: 'Server error with showing camp details' });
    }
});


//delete camp
app.delete('/campgrounds/:campid', async (req, res) => {
    try {
        const {campid} = req.params;
        await Campground.findByIdAndDelete(campid);
        res.status(200).json({ message: 'Deleted camp!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error with deleting camp' });
    }
});


//create review
app.post('/campgrounds/:campid/reviews', async (req, res) => {
    try {

        const { campid } = req.params;
        const { reviewRating, reviewText } = req.body;
    
        const review = new Review({ rating: reviewRating, text: reviewText });
        await review.save();

        console.log('review saved:', review)

        const campground = await Campground.findById(campid);
        campground.reviews.push(review._id);
        await campground.save();

        console.log('campground updated:', campground)

        res.status(200).json({message: 'review submitted successfully!'});
    } catch (error) {
        console.error('error:', error)
        res.status(500).json({ message: 'Server error with adding review' });
    }
})

    

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})









