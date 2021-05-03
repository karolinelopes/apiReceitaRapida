const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipe-controller');
// const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/ingredients/:ingredient', controller.findRecipesByIngredient);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);



module.exports = router;