var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eaglejeans"
});

con.connect(function (err){
    if(err) throw err;
});



module.exports = con;