var missingNumber = function(arr) {
  var n = arr.length + 1,
    sum = 0,
    expectedSum = n * (n+1)/2;
    // ^ sum of a linear series of numbers 

  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }  

  return expectedSum - sum;
};