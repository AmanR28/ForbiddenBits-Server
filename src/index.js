const app = require('express')();
const fileUpload = require('express-fileupload');
const cors = require("cors");
var connect = require('connect');
var serveStatic = require('serve-static');

app.use(cors());
app.use(fileUpload());

const port = 5000;

const { hostIP, hostQR } = require('./qr/qr');
const { addFile, fileList }  = require('./filePortal/files');

/////////////////////////////////////////////
          /// QR AREA ///
const IP = hostIP();
app.get('/hostIP', (req, res) => {res.send(IP);});

app.get('/hostQR', async (req, res) => {
  const qr = await hostQR();
  res.send(`<div style="margin: 100px;"><img src='${qr}' height="300px" width="300px"></div> <div style="margin-left:200px"><h3>${IP}:9020/</h3></div>`);
  // res.send(qr);
})


/////////////////////////////////////////////////////
    ///  UPLOAD - DOWNLOAD ///

// FILE LIST
app.get('/fileList', async (req, res) => {
  const list = await fileList();
  res.send(list);
});

// UPLOAD FILES
app.post('/upload', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let fileData = req.files.sampleFile;
  console.log('sam', fileData);
  fileData.storeName = Date.now() + '-' + fileData.name;
  fileData.url = 'http://' + IP + ':' + '8080/' + fileData.storeName;
  console.log('sam', fileData);
  fileData.mv(`./DB/${fileData.storeName}`, async function(err) {
    if (err) return res.status(500).send(err);

    const added = await addFile(fileData);
    res.send('File uploaded!');
    console.log(added);
  });
});

// DOWNLOAD FILES
connect().use(serveStatic('./DB/')).listen(8080, function(){
    console.log('File Host :: Running on port 8080');
});

///////////////////////////////////////////////////////


app.get("/upload", function(req, res) {
  res.sendFile(__dirname + "/filePortal/upload.html");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));