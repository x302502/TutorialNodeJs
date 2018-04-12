var express = require('express');
var router = express.Router();
var dbs = require('../src/database/dataMysql');
router.get('/', function(req, res, next) {
  res.send('API here');
});
router.get('/err',(req,res)=> {
    res.json({
        statusCode: 400,
        message: 'not.exists.url'
      })
})
router.get('/test', (req,res,next)=>{
    let arr = [];
    for (let index = 0; index < 10; index++) {
        let anyObj = {};        
        anyObj.name = 'A' + index;
        anyObj.eag = 5 * index;
        arr.push(anyObj);
    }
    res.json({
        list : arr
    });
});
router.get('/product',(req,res,next)=>{
    dbs.then( (newdb) => {
        newdb.query('SELECT * FROM product', (err,result) => {
            console.log(err);
            if (err) {
                res.json(err);
            } else {
                res.json({
                    statusCode: 200,
                    message: 'success',
                    data: result
                });
            }
        })
    }).catch( (err) => {
        res.json(err);
    })
})
router.get('/product/:id/:price' , (req,res,next)=> {
    dbs.then( (newdb) => {
        newdb.query('SELECT * FROM product WHERE id =' 
        + req.params.id + ' AND price = ' 
        + req.params.price, 
        (err,result) => {
            if (err) {
                res.redirect('/api/err')
            } else {
                res.json({
                    statusCode: 200,
                    message: 'success',
                    data: result
                });
            }
        })
    }).catch( (err) => {
        res.json(err);
    })
})
module.exports = router;