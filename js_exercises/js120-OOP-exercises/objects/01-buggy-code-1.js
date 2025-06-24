function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}
/**
 * The above code throws an error because the property names of the returned
 * object are being accessed as variables rather than properties.
 * 
 * For example, when the syntax 'morning' is used to access the value of the morning property,
 * it will throw an error since no variable named 'morning' exists as property names are not variables.
 * 
 * Instead it would need to be accessed as a property of the object.
 * 
 * This can be done through dot notation and using 'this' to refer to the
 * object which contains the 'greet' method.
 * 
 * I've fixed the code by adding 'this' in front of each attempt to access a property
 */

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
