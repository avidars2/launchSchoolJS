const HTTP = require('http');
const PORT = 3002;
const URL = require('url').URL;
const HANDLEBARS = require('handlebars');


// Query parameters provides inputs
// Use APR formula
// Display results on separate lines/

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url;
  let method = req.method;
  let host = req.headers.host;
  const APR = 5;

  
  if (!(path === ('favicon.ico'))) {
    let {amt, durationInYears} = getSearchParams(path, host);
    let content = createOfferBody(durationInYears, amt, APR)
    res.setHeader('Content-Type', 'text/html');
    res.write(content);
    res.end();
  }

})

function getHTMLStartEnd() {
  const HTML_START = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Loan Calculator</title>
          <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        background-color: rgba(255, 0, 0, 0.34);
        border: 25px solid green;
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
    </head>
    <body>
      <article>
        <h1>Loan Calculator</h1>
        <table>
          <tbody>`;

  const HTML_END = `
          </tbody>
        </table>
      </article>
    </body>
  </html>`;

  return {HTMLStart: HTML_START, HTMLEnd: HTML_END};


}
function getSearchParams(path, host) {
  let url = new URL(path, `http://${host}`);
  let amt = url.searchParams.get('amount');
  let durationInYears = url.searchParams.get('duration');

  return {amt, durationInYears};
}

function createOfferBody(durationInYears, amt, APR) {

  let monthlyPayment = calculateLoan(durationInYears, amt, APR);

  let body = `
  <tr>
    <th>Amount:</th>
    <td><a href='/?amount=${Number(amt) - 100}&duration=${Number(durationInYears)}'>- $100</a></td>
    <td>$${Number(amt)}</td>
    <td><a href='/?amount=${Number(amt) + 100}&duration=${Number(durationInYears)}'>+ $100</a></td>
  </tr>
    <th>Duration:</th>
    <td><a href='/?amount=${Number(amt)}&duration=${Number(durationInYears) - 1}'>- 1 year</a></td>
    <td>${Number(durationInYears)} years</td>
    <td><a href='/?amount=${Number(amt)}&duration=${Number(durationInYears) + 1}'>+ 1 year</a></td>
  <tr>
    <th>APR:</th>
    <td colspan='3'>${APR}%</td>
  </tr>
    <th>Monthly Payment:</th>
    <td colspan='3'>$${monthlyPayment}</td>
    `
  return `${getHTMLStartEnd().HTMLStart}${body}${getHTMLStartEnd().HTMLEnd}`;
}

function calculateLoan(durationInYears, loanAmount, APR) {
  let durationInMonths = durationInYears * 12;
  const MONTHLY_INTEREST_RATE = (APR * .01) / 12

  let monthlyPayment = loanAmount * (MONTHLY_INTEREST_RATE / (1 - Math.pow((1 + MONTHLY_INTEREST_RATE), (-durationInMonths))));

  return monthlyPayment.toFixed(2);


}

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})