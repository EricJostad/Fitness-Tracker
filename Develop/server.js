// Setting up required dependencies for server creation
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('../Develop/routes/apiRoutes');
const htmlRoutes = require('../Develop/routes/htmlRoutes');

const PORT = process.env.PORT || 1170;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan('dev'));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

mongoose.connection.on('error', (err) => console.log(`error in mongoose connection: ${err.message}`));

mongoose.connection.once('open', () => {
    console.log('mongoose connected!');
    app.listen(PORT, (err) => console.log(`App is running at: http://localhost/${PORT}`));
});