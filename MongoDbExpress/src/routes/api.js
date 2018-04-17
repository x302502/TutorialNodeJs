var express = require('express');
var router = express.Router();
const common = require('../common');
const productController = require('../controller/productController');
const categoryController = require('../controller/categoryController');
router.use((req, res, next)=>{
      res.status(404).json( new common.ApiResult(404,"err.url"));
  });
router.get('/tt',(req,res,next)=>{
    res.json(req.query);
})
router.use('/product',productController);
router.use('/category',categoryController);
module.exports = router;