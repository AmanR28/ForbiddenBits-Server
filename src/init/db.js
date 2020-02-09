var mysql = require('mysql');
let sql = "";

//
// Create Database
//
var con = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password"  
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sql = "CREATE DATABASE IF NOT EXISTS fb;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

//
// Create Table
//
var con = mysql.createConnection({
  host: "localhost",  
  user: "root",  
  password: "password",
  database: "fb"  
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = "CREATE TABLE IF NOT EXISTS files (id INT, name VARCHAR(255), size VARCHAR(255), url VARCHAR(255));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  con.end();
});