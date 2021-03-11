'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: [{
        name: {
            type: String,
            required: true
    },
    calorie: {
        type: Number
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }
}],

    yield: {
        type: String,
        required: true
    },
    totalTime: {
        type: Number,
        required: true
    },
    timeCooking: {
        type: Number,
        required: true
    },
    preparationMode: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = mongoose.model('Recipe', schema);