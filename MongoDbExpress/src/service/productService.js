const database = require('../databases/mongoData');
const common = require('../common');
const autoIncrement = require("mongodb-autoincrement");
var Product = require('../models/product');
class ProductService {
    static getAll() {
        return new Promise((resolve, reject) => {
            database.then((dbs) => {
                    dbs.collection('products').find().toArray((err, data) => {
                        if (err) {
                            reject(new common.ApiResult, (406, 'err.parse.data', undefined));
                        } else {
                            resolve(data);
                        }
                    });
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    static add(body) {
        return new Promise((resolve, reject) => {
            console.log(Object.getOwnPropertyNames(body).length)
            if (body.description == null || body.name == null || body.status == null || Object.getOwnPropertyNames(body).length < 3 || Object.getOwnPropertyNames(body).length > 4) {
                reject(new common.ApiResult(406, 'err.body.data'))
            } else {
                database.then((dbs) => {
                        autoIncrement.getNextSequence(dbs, 'products', (err, autoIndex) => {
                            if (err) {
                                reject(new common.ApiResult, (304, 'err.insert.data', undefined))
                            } else {
                                dbs.collection('products').insert(
                                    new Product(autoIndex, body.categoryId, body.name, body.description, Date.now(), body.status),
                                    (err, data) => {
                                        if (err) {
                                            reject(new common.ApiResult, (304, 'err.insert.data', undefined))
                                        } else {
                                            resolve(data.ops);
                                        }
                                    })
                            }
                        })
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        })
    }
}
module.exports = ProductService;