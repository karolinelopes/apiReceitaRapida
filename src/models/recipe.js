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
        type: Number,
        required: true
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }
}],
    measureUnit: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    yield: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    preparationMode: {
        type: String,
        required: true
    },
    totalCalories: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Recipe', schema);