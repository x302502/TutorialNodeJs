const database = require('../databases/mongoData');
const common = require('../common');
const autoIncrement = require("mongodb-autoincrement");
class Product {
    static getAll() {
        return new Promise( (resolve,reject) =>{
            database.then( (dbs)=> {
                dbs.collection('products').find().toArray((err,data)=> {
                    if(err) {
                        reject( new common.ApiResult,(300,'err.parse.data',undefined));
                    } else {
                        resolve(data);
                    }
                });
            })
            .catch( err => {
                reject(err);
            })
        })
    }
    static add() {
        return new Promise( (resolve,reject) =>{
            database.then( (dbs)=> {
                autoIncrement.getNextSequence(dbs,'products',(err,autoIndex) => {
                    if(err) {
                        reject( new common.ApiResult,(300,'err.insert.data',undefined) )
                    } else {
                        dbs.collection('products').insert({
                            _id: autoIndex,
                            description : "hello",
                            create_at : Date.now(),
                            status : true,
                            name : "Luan"
                        },(err,data)=> {
                            if (err) {
                                reject(new common.ApiResult,(300,'err.insert.data',undefined))
                            } else {
                                resolve(data);
                            }
                        })
                    }
                })
            })
            .catch( err => {
                reject(err);
            })
        })
    }
}
module.exports =  Product;