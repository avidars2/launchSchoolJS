let str = 'https://solutions.sciquest.com/apps/Router/SimpleCheckout?ReqId=200487873&tmstmp=1745174041581';

let x = str.split('?')[1].split('=')[1].split('&')[0]

console.log(x)
