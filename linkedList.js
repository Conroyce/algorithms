var Node = function(value) {
  this.value = value;
};

var linkedList = function(value) {
  this.head = undefined;
  this.tail = undefined;
  this.length = 0;
};

var reverseLinkedList = function(list) {
  var node = list.head;
  var previous = null;

  while(node) {
    var save = node.next;
    //reverse pointer
    node.next = previous;
    //increment previous to current node
    previous = node;
    //increment node to next node or null if at end of list
    node = save;
  }
  return previous;
};

linkedList.prototype.push = function(value) {
  var node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.length++;
  } else {
    console.log("this: ", this);
    this.tail.next = node;
    this.tail.previous = this.tail;
    this.tail = node;
    this.length++;
  }
  return this;
};

linkedList.prototype.pop = function() {
  if(!this.tail) {
    return undefined;
  } 

  var oldTail = this.tail;
  var newTail = oldTail.previous;
  if(!newTail) {
    this.tail = undefined;
  }

  oldTail.previous = undefined;
  this.tail = newTail;
  this.length--;

  return oldTail.value;
};

linkedList.prototype.unshift = function(value) {
  var node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.length++;
  } else {
    this.head.previous = node;
    this.head.next = this.head;
    this.head = node;
    this.length++;
  }

  return this;
};

linkedList.prototype.shift = function(value) {
  if (!this.head) 
    return undefined;

  var oldHead = this.head;
  var newHead = oldHead.next;

  if (!newHead)
    this.head = undefined;

  oldHead.next = undefined;
  this.head = newHead;
  this.length--;

  return oldHead.value;
};

linkedList.prototype.peekHead = function() {
  return this.head.value;
};

linkedList.prototype.peekTail = function() {
  return this.tail.value;
};



