const mongoose = require('mongoose');

const Schema = mongoose.Schema;     // Oject describing the schema or data type of each element

const restaurantSchema = new Schema({
    city: {
        type: Number
    }
})

module.exports = mongoose.model('sample123', restaurantSchema, 'restaurant');