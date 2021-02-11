'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String, 
        required: true
    },
    category: [{
        type: String, 
        required: true
    }],
    calorie: {
        type: Number, 
        required: true
    }
});

module.exports = mongoose.model('Ingredient', schema);
