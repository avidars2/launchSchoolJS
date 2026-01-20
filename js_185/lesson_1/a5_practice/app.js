const {Client} = require('pg');
console.log("Hello world!");


let client = new Client({database: 'films', password: 'avi', user: 'avi'});

client.connect();

// let data = client.query(`SELECT * FROM directors`).then((value) => {
//   console.log(value);
// });

async function logQuery(queryText, endConnection=false) {
  let data = await client.query(queryText);
  console.log(data);

  if (endConnection) client.end();
}

// logQuery(`TABLE directors`);

let query = `
SELECT count(id) FROM films
  WHERE duration < 110
  GROUP BY genre
`
logQuery(query, true);