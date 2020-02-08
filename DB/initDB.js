const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password", 
    database: "fb"
});

con.connect(function(err) {
    if (err) throw err;
    let sql = "INSERT INTO files (id, name, size, url) VALUES ?";
    let values = [
        [1, '1.txt', 'size', 'localhost:8080/1.txt'],
        [2, '2.txt', 'size', 'localhost:8080/2.txt'],
        [1, '3.txt', 'size', 'localhost:8080/3.txt'],
        [1, '4.txt', 'size', 'localhost:8080/4.txt'],
        [1, '5.txt', 'size', 'localhost:8080/5.txt'],
        [1, '6.txt', 'size', 'localhost:8080/6.txt'],
        [1, '7.txt', 'size', 'localhost:8080/7.txt'],
        [1, '8.txt', 'size', 'localhost:8080/8.txt'],
    ]
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log(result);
      res = 'true';
      return res;
    });
    con.end();
});