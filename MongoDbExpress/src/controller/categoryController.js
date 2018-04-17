var express = require('express');
var router = express.Router();
const common = require('../common')
const categoryService = require('../service/categoryService');
router.get('/',(req,res,next)=> {
    categoryService.getAll().then(data => {
        res.json(new common.ApiResult(200,'success',data));
    }).catch ( err => res.status(400).json(err));
})
router.post('/add',(req,res,next)=> {
    categoryService.add(req.body).then( data => {
        res.json(new common.ApiResult(200,'success',data));
    }).catch ( err => {
        console.log(err);
        res.status(err.statusCode).json(err);
    });
})
module.exports = router;