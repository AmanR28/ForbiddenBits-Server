exports.fileList = async () => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
      host: "localhost",  
      user: "root",  
      password: "password", 
      database: "fb"
  });

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