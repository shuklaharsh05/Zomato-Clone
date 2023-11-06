const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: Number
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('userConnect', userSchema, 'user')