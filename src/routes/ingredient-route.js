const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredient-controller');

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/',controller.delete);



module.exports = router;