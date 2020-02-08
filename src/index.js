const app = require('express')();
const port = 5000;

const { fileList }  = require('./filePortal/fileList');

app.get('/', (req, res) => {
  const r = fileList();
  return res.send(r);
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);