require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Campground = require('./models/campgrounds');


//Database connection
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
    });

     
app.use(bodyParser.json());


const PORT = process.env.PORT || 4500

const allowedOrigins = ['https://tentsandtrails.netlify.app', 'http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

//serves all files in public directory 
app.use(express.static('public'));


//all camps
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.json(campgrounds);
})

//new camp
app.post('/campgrounds', async (req, res) => {
    const campground = new Campground(req.body);
    await campground.save();
    res.status(200).json({ message: 'Created camp!' });
})

//edit camp 
app.patch('/campgrounds/:campid/edit', async (req, res) => {
    const {campid} = req.params;
    await Campground.findByIdAndUpdate(campid, { ...req.body });
    res.status(200).json({ message: 'Edited camp!' });
})


//show one camp
app.get('/campgrounds/:campid', async (req, res) => {
    const {campid} = req.params;
    const campsite = await Campground.findById(campid);
    res.json(campsite);
})

//delete camp
app.delete('/campgrounds/:campid', async (req, res) => {
    const {campid} = req.params;
    await Campground.findByIdAndDelete(campid);
    res.status(200).json({ message: 'Deleted camp!' });
})

//create review
app.post('/campgrounds/:campid/reviews', async (req, res) => {

})




app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})







