//find greatest common diviser between two numbers

var gcd = function(n1,n2) {
  if (n1 < 2 || n2 < 2) {
    return 1;
  }
  
  var ans = [];
  var lowest = n1 < n2 ? n1 : n2;

  for(var i = 2; i <= lowest; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      ans.push(i);
    }
  }

  if (ans.length > 0) {
    return ans.pop();
  } else {
    return 1;
  }
}