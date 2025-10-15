const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;


//req === http.IncomingMessage type object
//res === http.ServerResponse type object
const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  let host = req.headers.host;
  // console.log(host);
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let searchParams = getSearchParams(`http://${host}`, path);
    console.log(searchParams);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (typeof searchParams.rolls === 'number' && typeof searchParams.sides === 'number') {
      let rolls = repeatFunction(generateRandomNum, searchParams.rolls, 1, searchParams.sides)
      .join('\n');
      // console.log(rolls);
      res.write(`${rolls}\n`);
    }

    res.write(`${method} ${path}\n`);
    res.end();

  }
  
})

function generateRandomNum(min=1, max=6) {
  return Math.floor(Math.random() * (max ?? 6- min ?? 1 + 1) + min ?? 1);
}

function repeatFunction(func, repeats, ...args) {
  let returnValues = []; 
  while (repeats > 0) {
      returnValues.push(func(...args));
      repeats--;
    }

  return returnValues;
}

function getSearchParams(host, path) {
  const myURL = new URL(path, host);

  return {rolls: Number(myURL.searchParams.get('rolls')), 
    sides: Number(myURL.searchParams.get('sides'))}
}

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
