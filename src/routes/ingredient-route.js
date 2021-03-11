const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredient-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);



module.exports = router;