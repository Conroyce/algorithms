var BST = function() {
  this.root = null;
};

BST.prototype = {

  add:function(value) {
    var node = {
      value: value,
      left: null,
      right: null
    }

    if (this.root === null) {
      this.root = node;
    } else {
      var current = this.root;

      while(true) {

        if (value < current.value) {

          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }

        } else if(value > current.value) {

          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }

        } else {
          break;
        }
      }
    }
  },

  contains: function(value) {
    var found = false,
        current = this.root;

    while(!found && current) {

      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  },

  traverse: function(process) {

    var trav = function(node) {
      if (node) {

        if (node.left !== null) {
          trav(node.left);
        }

        process.call(this,node);

        if (node.right !== null) {
          trav(node.right);
        }
      }
    };

    trav(this.root);
  },

  length: function() {
    var len = 0;

    this.traverse(function() {
      len++;
    });

    return len;
  },

  toArray: function() {
    var ans = [];

    this.traverse(
      function(node) { 
        ans.push(node.value); 
      });

    return ans;
  },

  toString: function() {
    return this.toArray().toString();
  }
};