const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
    })




app.listen(() => {
    console.log('listening on port 3000')
})