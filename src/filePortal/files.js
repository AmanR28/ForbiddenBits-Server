const mysql = require('mysql');

function connect() {
  return mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password", 
    database: "fb"
  });
}

exports.fileList = async () => {
  const con = connect();

  return new Promise(resolve => {
    con.connect(function(err) {
      if (err) throw err;
      let sql = "SELECT * FROM files";
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
        resolve(result);
      });
    }); 
  });
}