//without recursion
var fibonacci = function(n) {
  var ans = [0,1];
  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    ans.push(ans[i-1] + ans[i-2]);
  }

  return ans[n];
};

//with recursion
var fibonacci = function(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};