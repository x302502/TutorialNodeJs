const mysql = require('mysql');
const common = require('../common')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'databasefruit'
});
let db = new Promise((resolve,reject)=>{
    con.connect( (err) =>{
        if(err) {
            reject(new common.MyError(404,"not.connected"));
        } else {
            resolve(con)
        }
    })
})

module.exports = db;