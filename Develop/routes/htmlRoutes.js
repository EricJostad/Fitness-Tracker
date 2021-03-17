// Setting up required dependencies 
const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log('Current location: Index');
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
        console.log('Current location: Excercise');
    });

    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
        console.log('Current location: Stats');
    })
};