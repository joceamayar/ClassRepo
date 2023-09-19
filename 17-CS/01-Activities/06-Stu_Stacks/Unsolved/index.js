// create the Stack class with two methods to remove and add an element
class Stack {
 
 constructor(container = []) {
    this.container = container;
  }

  push(el) {
    return this.container.push(el);
  }


  pop() {
    return this.container.pop();
  }
}

module.exports = Stack;

