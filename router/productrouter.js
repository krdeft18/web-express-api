const express = require('express');
const productController = require('../controller/productcontroller');

const productRouter = express.Router();

productRouter.get('/product/allproduct', productController.getAllProduct);
productRouter.post('product/addproduct', productController.addProduct);

module.exports = productRouter;




