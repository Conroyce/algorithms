var nbrOfLaps = function (x, y) {
  if (x === y) return [1,1];
  
  var largest = x > y ? x : y;
  var ans = [y,x];
  
  for (var i = 2; i < largest; i++) {
    if (x % i === 0 && y % i === 0) {
       ans = [y/i,x/i];
    }
  }
  
  return ans;
}


// elegant solution

var nbrOfLaps = function(x, y) {
  var lcm = x;
  while(lcm % y != 0) {
    lcm += x;
  }
  
  return [lcm / x, lcm / y];
}