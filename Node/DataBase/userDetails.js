const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('userDetails', userDetailsSchema, 'userDetails')