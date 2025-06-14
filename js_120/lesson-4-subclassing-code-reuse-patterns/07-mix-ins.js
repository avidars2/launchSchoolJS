class Bird {}

const Flyable = {
  fly() {}
}

const Swimmable = {
  swim() {}
}

class Stork extends Bird {}
Object.assign(Stork.prototype, Flyable);

class Parrot extends Bird {}
Object.assign(Parrot.prototype, Flyable);

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Flyable, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Flyable, Swimmable);

class Duck extends Bird {}
Object.assign(Duck.prototype, Flyable);

class Goose extends Bird {}
Object.assign(Goose.prototype, Flyable);


