'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredient: {
        type: Array,
        required: true
    },
    category: {
    type: [Schema.Types.ObjectId],
    ref: 'Category'
    },
    income: {
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
        trim: true
    },
    favorites: {
        type: Number,
        default: 0
    },
    username: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }

});

module.exports = mongoose.model('Recipe', schema);