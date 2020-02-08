const app = require('express')();
const port = 5000;

const { addFile, fileList }  = require('./filePortal/files');

app.get('/', async (req, res) => {
  const r = await fileList();
  res.send(r);
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);