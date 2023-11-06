const mongoose = require('mongoose');

const Schema = mongoose.Schema;     // Oject describing the schema or data type of each element

const locationSchema = new Schema({
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('sample', locationSchema, 'location');