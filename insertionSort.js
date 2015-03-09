var insertionSort = function(arr) {
  var len = arr.length,
      value;

  for (var i = 1; i < len; i++) {
    value = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j+1] = arr[j]; 
    }
    arr[j+1] = value;
  }
  return arr;
};