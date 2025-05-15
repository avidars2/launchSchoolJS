function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let obj2 = {
  num: 23
}

let sumNum2 = sumNum.bind(obj, 50);
console.log(sumNum2(5)); // => 47

let sumNum3 = sumNum2.bind(obj2);

console.log(sumNum2.call(obj2, 5)); //Still 47
console.log(sumNum3(5)); //Still 47

