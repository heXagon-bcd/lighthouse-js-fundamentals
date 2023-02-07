var arr1 =[ 0, 1, 4, 1, 2 ]
console.log(arr1.length)


function lastIndexOf(arr, value) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === value) {
      return i;
    } else if (arr[i] != value) {
      return -1;
    }
   }
  }

function lastIndexOf(arr, value) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(typeof arr[i] === 'undefined') {
      return -1;
    } else if (arr[i] === value) {
      return i;
    }
   }
    if (arr[i] != value) {
    return -1;
  }
  }

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);