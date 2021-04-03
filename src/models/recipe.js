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
categorias: [{
    name: {
        type: String,
        required: true
},
category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
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
    }
});

module.exports = mongoose.model('Recipe', schema);