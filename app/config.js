var mongoose = require('mongoose');

// Opens connection to shortlydb in local running instance of mongodb

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

// Notifies us of successful or unsuccessful connections

db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', console.log('We\'re connected.'));

module.exports = db;
