var express = require('express');
var router = express.Router();
const common = require('../common')
const productService = require('../service/productService');
router.get('/', (req,res,next)=> {
   productService.getAll().then( data =>{
       res.json(new common.ApiResult(200,'success',data) );
   }).catch (err => res.json(err));
})
router.post('/add',(req,res,next) => {
    productService.add(req.body).then( data =>{
        res.json(new common.ApiResult(200,'success',data) );
    }).catch (err => res.json(err));
})
module.exports = router;