const HTTP = require('http');
const PORT = 3001;

const SERVER = HTTP.createServer((req, res) => {
  console.log(req.headers);
  let method = req.method;
  let path = req.url;
  let host = req.headers.host
  let cookie = req.headers.cookie;


  res.statusCode = 200;
  res.write('Hi');
  res.end();

})


SERVER.listen(PORT, () => {
  console.log('Server listening on', PORT);
})