// Setting up required dependencies for server creation
const express = require('express');
const mongoose = require('mongoose');
const Workout = require('../Develop/models/fitness');
const apiRoutes = require('../Develop/routes/apiRoutes');
const htmlRoutes = require('../Develop/routes/htmlRoutes');

const PORT = process.env.PORT || 1170;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

mongoose.connection.on('error', (err) => console.log(`error in mongoose connection: ${err.message}`));

mongoose.connection.once('open', () => {
    console.log('mongoose connected!');
    app.listen(PORT, (err) => console.log(`http://localhost/${PORT}`));
});