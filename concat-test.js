function concat(arr1, arr2) {
  var a = arr1;
  var b = arr2
  var arr3 = arr1.concat(arr2);
  return arr3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


var a = [ 1, 2, 3 ];
var b = [ 4, 5, 6 ];
var c = a.concat(b);
console.log(c);