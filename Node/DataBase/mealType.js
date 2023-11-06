const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mealTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('sample1234', mealTypeSchema, 'mealtype');