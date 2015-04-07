var duplicates = function(arr) {
  var ans = [];
  var ansObj = {};

  for (var i = 0; i < arr.length; i++) {
    if (!ansObj[arr[i]]) {
      ansObj[arr[i]] = 1;
      ans.push(arr[i]);
    }
  }

  return ans;
};
