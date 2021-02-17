'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco de dados (mongodb, string de conexão)
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Carrega ao models
const Ingredient = require('./models/ingredient');
const Recipe = require('./models/recipe');
const User = require('./models/user');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const ingredientRoute = require('./routes/ingredient-route');
const recipeRoute = require('./routes/recipe-route');
const userRoute = require('./routes/user-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Habilita o cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/ingredients', ingredientRoute);
app.use('/recipes', recipeRoute);
app.use('/users', userRoute);

module.exports = app;