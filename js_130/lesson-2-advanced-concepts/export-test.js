const myVar = 5;
let myOtherVar = 3;


class doStuff {
  constructor() {
    this.thing = 5;
  }

  getThing() {
    return this.thing;
  }
  printOtherVar() {
    console.log(myOtherVar);
  }
}

class moduleDetails {
  constructor() {
    this.directory = `${__dirname}`;
    this.path = `${__filename}`;
  }

  getFolder() {
    return this.directory;
  }

  getPath() {
    return this.path;
  }
}


module.exports = {
  myVar,
  doStuff,
  moduleDetails,
}

