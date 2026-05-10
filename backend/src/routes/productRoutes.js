const express = require('express');
const router = express.Router();
const { 
  addProduct, 
  getProducts, 
  getProductById, 
  deleteProduct 
} = require('../controllers/productController');

router.route('/')
  .get(getProducts)
  .post(addProduct);

router.route('/:id')
  .get(getProductById)
  .delete(deleteProduct);

module.exports = router;
