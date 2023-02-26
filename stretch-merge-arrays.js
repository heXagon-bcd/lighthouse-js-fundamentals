/*
The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

For example:

code	output
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]
Tips
You may paste the following code after your function definition to help you verify it works correctly:
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

*/

const merge = function(x,y) {
var mergedArray = x.concat(y);
mergedArray.sort((a, b) => a - b);
return mergedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);