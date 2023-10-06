const express = require('express');
const { addProductHandler, getAllProductHandler } = require('../controllers/productController');

const router = express.Router();

router.get('/products', getAllProductHandler);
router.post('/products', addProductHandler);

module.exports = router;