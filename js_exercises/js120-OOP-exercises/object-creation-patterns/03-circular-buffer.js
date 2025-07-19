/**
 * Circular buffer:
 * 1. Collection of objects stored in a buffer as if connected end-to-end in a circle
 * 
 * Adding an item:
 * 1. IF buffer isn't full
 * ---Gets added right after most recently added object
 * 2. IF buffer IS full
 * ---Remove object that has been in buffer longest
 * ---Replace with new object
 * 
 * 
 * 
 * Item buffer with 3 slots:
 * --- --- --- ---
 * 
 * Add 1, 2, 3 in order
 * 
 * ---1---2---3---
 * 
 * Add 4
 * 
 * ---4---2---3---
 * 
 * Remove object:
 * 
 * ---4--- ---3---
 * 
 * Add 5:
 * 
 * ---4---5---3---
 * 
 * Implicits:
 * 1. Keep track of oldest item in buffer
 * 2. Keep track of available slots in buffer
 * 3. When an item is added, prioritize open slots before removing items
 * 4. 
 * 
 * Explicits:
 * 1. CircularBuffer class
 * 2. Obtain buffer size with argument provided to constructor
 * 3. Provide 'put' and 'get' method
 * 4. Put method adds object to buffer
 * --takes 1 argument
 * 5. 'get' method removes oldest object in buffer
 * --if empty returns null
 * 
 * shift/pop? Oldest item is always at front
 * 
 * new buffer size 3:
 * [e, e, e]
 * 
 * Check for empty slot from start
 * if found, add object there
 * 
 * If not, shift first element
 * Add object to end
 * 
 * add 1, 2, 3
 * [1, 2, 3]
 * add 4
 * array is checked for empty slots, none found
 * array is shifted and returns 1
 * [2, 3]
 * 
 * 4 is added to end
 * [2, 3, 4]
 * 
 * get
 * 
 * 2 is shifted out
 * 
 * get
 * 
 * 3 is shifted out
 * 
 * [4, e, e]
 * 
 * put 5
 * 
 * scan for empty slot
 * add to first empty slot found
 * [4, 5, e]
 * 
 * 
 * 
 * Array is needed
 * 
 * Way to find first empty slot function
 * 
 */

class CircularBuffer {
  static firstEmptySlot(buffer) {
    // console.log('Buffer:', buffer);
    let emptySlot = buffer.findIndex(el => el === null);
    return emptySlot;
  }
  constructor(size) {
    this.size = size;
    this.buffer = (new Array(size)).fill(null);
  }

  put(obj) {
    /**
     * Find empty slot
     * If found, replace with 'obj'
     * If not found, shift buffer then push 'obj'
     */

    let emptySlot = CircularBuffer.firstEmptySlot(this.buffer);
    if (emptySlot === -1) {
      this.buffer.shift();
      this.buffer.push(obj);
    } else {
      this.buffer[emptySlot] = obj;
    }

  }

  get() {
    /**
     * shift first object
     * push null to array
     * return 'shift' value
     */

    let retrievedValue = this.buffer.shift();
    this.buffer.push(null);
    return retrievedValue;
  }
}


let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);

buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1)
anotherbuffer.put(2)
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3)
anotherbuffer.put(4)
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5)
anotherbuffer.put(6)
anotherbuffer.put(7)
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);