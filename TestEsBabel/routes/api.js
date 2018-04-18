import { Router } from "express";
import TestController from "../controller/TestController";
let router = Router();

router.get('/list',(req,res)=> {
    TestController.getAll().then( data => {
        res.json(data);
    }).catch( err => {
        res.json(err);
    })
})
router.get('/list1',(req,res)=> {
    let tt =TestController.loadAll();
    res.json('hehe');
})
export default router;