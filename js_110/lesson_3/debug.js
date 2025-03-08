let arr = [1, 2, 3, 4, 5]

arr.map(el => mut(el))

function mut(num) {
  num = num + num;
  return num + num;
}