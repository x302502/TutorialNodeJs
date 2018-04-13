const common = require('../common');
const MongoClient = require('mongodb').MongoClient;
const HOST_DATABASE_URL = 'mongodb://localhost:27017/expressDB';
let db = new Promise((resolve,reject)=>{
    MongoClient.connect(HOST_DATABASE_URL).then( dbs => {
        resolve(dbs.db());
    })
    .catch( err => {
        reject( new common.ApiResult(404,"err.not.connected.database",undefined));
    })
})
module.exports = db;
