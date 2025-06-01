function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      Object.entries(this).forEach(set => {
        if (!(set[1] instanceof Function)){
        console.log(`${set[0]}: ${set[1]}`)
      }
    });
    },
    setPrice(amt) {
      if (amt > 0) {
        this.price = amt;
      } else {
        console.log('Invalid Price!');
      }
    }
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Drill', 15, 45);
let hammer = createProduct(2, 'Hammer', 500**5, 10);
let nails = createProduct(3, 'Nails', 375**8, 0.05);


scissors.setPrice(50);
scissors.describe();
hammer.describe();
nails.describe();