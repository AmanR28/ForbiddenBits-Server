var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./DB/')).listen(8080, function(){
    console.log('Server running on 8080...');
});

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
// default options
app.use(fileUpload());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/filePortal/upload.html");
});


app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`./DB/files/${sampleFile.name}`, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.listen(2000, function(a) {
  console.log("Listening to port 2000");
});