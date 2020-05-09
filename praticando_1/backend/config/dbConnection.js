const mysql = require('mysql2')

const connMySQL = ()=>{
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '2410',
        database : 'portal_noticias',
    })
}

module.exports = ()=>{
    return connMySQL
}