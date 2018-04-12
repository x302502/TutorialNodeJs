var express = require('express');
var router = express.Router();
const viewModel = require('../viewmodel');
router.get('/', (req,res,next)=> {
    viewModel.Category.getAll().then( data => {
        res.json({
            listCategory: data
        })
    }).catch(err => {
        res.json(err);
    })
})
router.get('/:id',(req,res,next) => {
    viewModel.Category.finOneById(req.params.id).then(data => {
        res.json(data);
    }).catch (err => {
        res.json(err);
    })
})
module.exports = router;