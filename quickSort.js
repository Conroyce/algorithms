var quickSort = function(arr) {
  if (arr.length === 0) 
    return [];

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};