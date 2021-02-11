'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco de dados (mongodb, string de conexão)
mongoose.connect(config.connectionString);

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

app.use('/', indexRoute);
app.use('/ingredients', ingredientRoute);
app.use('/recipes', recipeRoute);
app.use('/users', userRoute);

module.exports = app;