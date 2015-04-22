var guessGifts = function(wishlist, presents) {
  var obj = {};
  var ans = [];

  for (var i = 0; i < wishlist.length; i++) {
    for (var j = 0; j < presents.length; j++) {
      if (wishlist[i].size === presents[j].size && wishlist[i].clatters === presents[j].clatters && wishlist[i].weight === presents[j].weight) {
        if (! obj[wishlist[i].name])
          obj[wishlist[i].name] = true;
      }
    }
  }

  for (var key in obj) {
    ans.push(key);
  }

  return ans;
};

var guessGifts = function(wishlist, presents) {
  return wishlist.filter(function(x){
    return presents.some(function(y){
      return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    });
  }).map(function(x){ return x.name; });
}