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
const Recipe = require('./models/recipe');
const User = require('./models/user');
const Category = require('./models/category');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const recipeRoute = require('./routes/recipe-route');
const userRoute = require('./routes/user-route');
const categoryRoute = require('./routes/category-route');
const uploadRoute = require('./routes/upload-route');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Habilita o cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
});

app.use('/', indexRoute);
app.use('/recipes', recipeRoute);
app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/upload',uploadRoute);

module.exports = app;