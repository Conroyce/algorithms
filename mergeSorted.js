//merge two sorted arrays
var mergeSorted = function(arr1,arr2) {
  var ans = [];
  while(arr1.length > 0 && arr2.length) {
    if (arr1[0] < arr2[0]) {
      ans.push(arr1.shift());
    } else {
      ans.push(arr2.shift());
    }
  }

  while(arr1.length > 0) {
    ans.push(arr1.shift());
  }

  while(arr2.length > 0) {
    ans.push(arr2.shift());
  }

  return ans;
};