// Setting up required dependencies for server creation
const express = require('express');
const mongoose = require('mongoose');
const Fitness = require('../Develop/models/fitness');

const PORT = process.env.PORT || 1170;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Choresdb', { useNewUrlParser: true });

mongoose.connection.on('error', (err) => console.log(`error in mongoose connection: ${err.message}`));

mongoose.connection.once('open', () => {
    console.log('mongoose connected!');
    app.listen(PORT, (err) => console.log(`http://localhost/${PORT}`));
});