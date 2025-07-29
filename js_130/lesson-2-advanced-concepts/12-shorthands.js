let obj = {
  a: 1,
  b: 2,
  c: 3
}


// let {a, b, c} = obj;

let a;
let b;
let c;

({a, b, c} = obj);

console.log(a,b ,c);