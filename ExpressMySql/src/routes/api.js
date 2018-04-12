var express = require('express');
var router = express.Router();
let categoryController = require('../controller/categoryController');
let productController = require('../controller/productController');
router.use('/category',categoryController);
router.use('/product',productController);
module.exports =router;