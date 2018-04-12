const dbMysql = require('../databases/mySqlData');
const common = require('../common')
class ProductViewModel {
    getAll() {
        return new Promise ((resolve,reject)=>{
            dbMysql.then( newDb =>{
                newDb.query('SELECT * FROM product',(err,data)=>{
                    if (err) {
                        reject(new common.MyError(400,"not.query.data"));
                    } else {
                        resolve(data)
                    }
                })
            }).catch( err => {
                reject(err);
            })
        })
     }
     finOneById(id){
        return new Promise ((resolve,reject)=>{
            dbMysql.then( newDb =>{
                newDb.query('SELECT * FROM product WHERE id = ' + id ,(err,data)=>{
                    if (err) {
                        reject(new common.MyError(400,"not.query.data"));
                    } else {
                        resolve(data)
                    }
                })
            }).catch( err => {
                reject(err);
            })
        })
     }
}
module.exports = ProductViewModel;