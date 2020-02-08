const app = require('express')();
const port = 5000;

const { hostIP } = require('./qr/ip');
const { addFile, fileList }  = require('./filePortal/files');

app.get('/hostIP', (req, res) => {
  res.send(hostIP());
});

app.get('/fileList', async (req, res) => {
  const list = await fileList();
  res.send(list);
});


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);