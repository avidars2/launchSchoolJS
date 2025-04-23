function Cat(name) {
    this.name = name;
    this.purr = () => console.log('purr');
    this.talk = (english) => console.log(english.split(' ').map((word) => `Meow${word}Oww`).join(' '));
  }
  
  let butterscotch = new Cat("Butterscotch");
  let pudding = new Cat("Pudding");

  console.log(butterscotch);
  butterscotch.purr()
  butterscotch.talk('Hi There')