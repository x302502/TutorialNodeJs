var express = require('express');
var router = express.Router();
const common = require('../common');
const Product = require('../models/product')
router.get('/product',(req,res,next)=>{
   Product.getAll().then( (data) =>{
       res.json(new common.ApiResult(200,'success',data));
   })
   .catch( err => {
       res.json(err);
   })
})
router.get('/product/add',(req,res,next)=>{
    Product.add().then( (data) =>{
        res.json(new common.ApiResult(200,'success',data));
    })
    .catch( err => {
        res.json(err);
    })
 })
module.exports = router;