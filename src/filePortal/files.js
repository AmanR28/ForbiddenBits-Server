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
        let t = {'data' : result}
        t = JSON.stringify(t);
        resolve(t);
      });
    }); 
  });
}

exports.addFile = async (fileData) => {
  const con = connect();

  return new Promise(resolve => {
    con.connect(function(err) {
      if (err) throw err;
      console.log('FIle', fileData);
      let sql = `INSERT INTO files (id, name, size, url) VALUES ('56', '${fileData.name}', '${fileData.size}', '${fileData.url}')`;
      console.log('sql', sql);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        resolve(result);
      });
    });
  }); 

};