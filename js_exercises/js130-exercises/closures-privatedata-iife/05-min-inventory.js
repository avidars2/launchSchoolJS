/**
 * Item creator
 * 
 * Item manager
 * 
 * Reports manager
 */

class Item {
  constructor(itemName, category, quantity) {
    this.name = itemName;
    this.category = category;
    this.quantity = quantity;
    this.SKU = (this.name.slice(0,3) + this.category.slice(0,2)).toUpperCase();
  }

  // get SKU() {
  //   return this.#SKU;
  // }

  // validateFieldsAreFilled() {
  //   if (Object.values(this).
  //   some(propertyValues => (propertyValues === undefined))) {
  //     return false
  //   };

  //   if (this.category.includes(' ')) return false;
  //   if (this.name.length < 5 || this.category.length < 5) return false;

  //   return true;
  // }

  hasZeroRemaining() {
    return this.quantity <= 0;
  }
}

class ItemManagerMaker {
  constructor() {
    this.items = [];
  }

  create(itemName, category, quantity) {
    const newItem = new Item(itemName, category, quantity);
    // console.log(this.validateItemFieldsAreFilled(newItem))

    if (this.validateItemFieldsAreFilled(newItem)) {
      this.items.push(newItem);
    } else return false;
  }

  validateItemFieldsAreFilled(item) {
    if (Object.values(item).
    some(propertyValues => (propertyValues === undefined))) {
      return false
    };

    if (item.category.includes(' ')) return false;
    if (item.name.length < 5 || item.category.length < 5) return false;

    return true;
  }

  update(skuCode, object) {
    Object.assign(this.findItem(skuCode), object);
  }

  findItem(skuCode) {
    return this.items.find(item => {
      return item.SKU === skuCode;
    })
  }

  findItemIndex(skuCode) {
    return this.items.findIndex(item => {
      return item.SKU === skuCode;
    })
  }

  delete(skuCode) {
    this.items.splice(this.findItemIndex(skuCode), 1);
  }

  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;
    })
  }

  itemsInCategory(category) {
    return this.items.filter(item => {
      return item.category === category;
    })
  }

}

class ReportManagerMaker {
  constructor() {
    this.items = null;
  }
  init(ItemManager) {
    this.items = ItemManager;
  }

  createReporter(sku) {
    return {
      itemInfo() {

      }
    }
  }
}

let p = console.log;
const ItemManager = new ItemManagerMaker();
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
// p(ItemManager.items);

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
p(ItemManager.inStock());
// p(ItemManager.items);
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10