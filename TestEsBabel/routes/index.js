import { Router } from "express";
let router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', (req,res) => {
  res.json({
    httpCode: 200,
    message: 'ok'
  })
})

export default router;
