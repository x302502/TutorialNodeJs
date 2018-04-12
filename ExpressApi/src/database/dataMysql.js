const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'databasefruit'
});
let db = new Promise((resolve,reject)=>{
    con.connect( (err) =>{
        if(err) {
            reject('not connected');
        } else {
            resolve(con)
        }
    })
})

module.exports = db;