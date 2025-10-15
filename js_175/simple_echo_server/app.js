const HTTP = require('http');
const PORT = 3000;

//req === http.IncomingMessage type object
//res === http.ServerResponse type object
const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    // res.sendDate();
    res.end();
    // console.log(method);
    // console.log(path);
    // return res
  }

  
  
})

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
