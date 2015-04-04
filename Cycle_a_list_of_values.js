// You're part of a team porting MS Paint into the browser and currently working on a new UI component that allows user to control the canvas zoom level.

// According to the wireframes delivered to you in PowerPoint format the user should be able to cycle through specified zoom levels by clicking a button in the UI repeatedly. The reverse direction should work with shift key held.

// A new function is needed to support this behavior, so you alt-tab to Visual Studio and get to work.

function cycle(dir, arr, cur) {
  var leftOver;
  var check = arr.indexOf(cur);
  if (check === -1) return null;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === cur) {
      //check if direction is positive and element is not last in arr
      if (dir > 0 && i+dir <= arr.length - 1) {
        return arr[i+dir];
      } else if (dir > 0) {
        leftOver = (i+dir) - arr.length;
        return arr[leftOver];
        //check if direction is negative and element isnt first
      } else if (dir < 0 && i+dir >= 0) {
        return arr[i+dir];
      } else {
        leftOver = i+dir;
        return arr[arr.length+leftOver];
      }
    }
  }
}

cycle(-2, [1,2,3], 3) // returns 1
cycle(-1, [1,2,3], 1) // returns 3
cycle(2, [1,2,3], 1) // returns 3
cycle(1, [1,2,3], 3) // returns 1
cycle(1, [1,2,3], 0) // returns null
