let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    // this.price -= discount;
    
    return this.price - discount;
  },
};


console.log(item.discount(20));   // should return 40
console.log(item.discount(50));   // should return 25
console.log(item.discount(25));   // should return 37.5

/**
 * The reason for the initial error is that the '-=' operator was used
 * which was causing the price property to be re-assigned to the lowered value.
 * 
 * Because objects are mutable, each invocation of the method alters the state of
 * the object.
 * 
 * This operator subtracts the current value by the right operand and the returned
 * value is re-assigned to the property.
 */