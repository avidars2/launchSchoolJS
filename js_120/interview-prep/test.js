let john = {
 firstName: "John",
 lastName: "Doe",
 greetings: function () {
  console.log("hello, " + this.firstName + " " + this.lastName);
 }.bind(this),
};
john.greetings();

//I believe the return value of bind is what 'greetings' gets set to
//this would refer to the global execution context
//so this would output 'hello undefined undefined;