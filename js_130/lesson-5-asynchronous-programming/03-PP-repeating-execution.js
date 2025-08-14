function startCounting() {
  let num = 0;
  return setInterval(() => {num++;console.log(num)}, 1000);
}

function stopCounting(delay) {
  let id = startCounting();
  console.log(id);

  setTimeout(() => clearInterval(id), delay * 1000);

}

stopCounting(10)