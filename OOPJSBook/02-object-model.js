class Plant {
  photosynthesize() {
    console.log(`This ${this.constructor.name} is photosynthesizing`);
  }
}

class Tree extends Plant {
  grow() {
    console.log(`This ${this.constructor.name} grows!`);
  }
}

class Flower extends Plant {
}

class Grass extends Plant {
}

class Oak extends Tree {
  produceAcorn() {
    console.log(`This ${this.constructor.name} produced an acorn!`);
  }
}

let tree = new Tree();
tree.photosynthesize(); // This Tree is photosynthesizing
tree.grow();

let oak = new Oak();
oak.photosynthesize();
oak.grow();
oak.produceAcorn();

let flower = new Flower();
flower.photosynthesize(); // This Flower is photosynthesizing

let grass = new Grass();
grass.photosynthesize(); // This Grass is photosynthesizing
