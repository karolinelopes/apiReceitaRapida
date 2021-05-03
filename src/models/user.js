'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Recipe'
    }
});

module.exports = mongoose.model('User', schema);
