function myBind(func, context, ...args) {
  return function (...moreArgs) {
    func.apply(context, args.concat(moreArgs));
  }
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
}

function doStuff(hi) {
  console.log(hi + this.a);
}

let newFunc = myBind(doStuff, obj, 'a');
newFunc('0');