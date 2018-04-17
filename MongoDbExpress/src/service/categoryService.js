const database = require('../databases/mongoData');
const common = require('../common');
const autoIncrement = require("mongodb-autoincrement");
var Category = require('../models/category');
class CategoryService {
    static getAll() {
        return new Promise((resolve, reject) => {
            database.then((dbs) => {
                    dbs.collection('categories').find().toArray((err, data) => {
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
            if (body.description == null || body.name == null || Object.getOwnPropertyNames(body).length != 2) {
                reject(new common.ApiResult(406, 'err.body.data'))
            } else {
                database.then((dbs) => {
                        autoIncrement.getNextSequence(dbs, 'categories', (err, autoIndex) => {
                            if (err) {
                                reject(new common.ApiResult, (304, 'err.insert.data', undefined))
                            } else {
                                dbs.collection('categories').insert(
                                    new Category(autoIndex,body.name,body.description),
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
module.exports = CategoryService;