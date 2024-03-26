var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost', // your host name
    user: 'root', // database username
    password: 'mysql', // database password
    database: 'mydb' //database Name
});
db.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = db;
