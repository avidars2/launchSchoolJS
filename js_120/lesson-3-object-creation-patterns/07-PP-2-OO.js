let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
   describeProduct() {
    Object.entries(this).forEach(set => {
      if (!(set[1] instanceof Function)){
      console.log(`${set[0]}: ${set[1]}`)
      }
    });
  },
  setProductPrice(amt) {
    if (amt > 0) {
      this.price = amt;
    } else {
      console.log('Invalid Price!');
    }
  }
}

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  describeProduct() {
    Object.entries(this).forEach(set => {
      if (!(set[1] instanceof Function)){
      console.log(`${set[0]}: ${set[1]}`)
      }
    });
  },
  setProductPrice(amt) {
    if (amt > 0) {
      this.price = amt;
    } else {
      console.log('Invalid Price!');
    }
  }
}

drill.setProductPrice(6);
drill.describeProduct();

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

let newPr = createProduct(2, 'scis', 5, 80);
newPr.describe();