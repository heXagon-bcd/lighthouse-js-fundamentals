/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.
*/

// this example doesnt work becasue the value is undefined at data[i].  This is because the input is a double square bracket
const repeatNumbers = function(data) {
var value = data[0];
var numRepeat = data[1];
var str = "";
for(var i = 0; i < numRepeat; i++) {
  str = str.toString() + value.toString();
  } 
return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//this cannot scale if there are two arrays or more in an object
const repeatNumbers = function(data) {
  console.log(data[0][0])
  console.log(data[0][1])
  var value = data[0][0].toString();
  var numRepeat = data[0][1];
  var str = "";
  for(var i = 0; i < numRepeat; i++) {
    str = str + value;
    } 
  return str;
  };
  
  console.log(repeatNumbers([[1, 10]]));

/// the doubl elog logic is right a should be before i since theres only 2 objects
  const repeatNumbers = function(data) {
    var str = [];
    for(var i = 0; i < numRepeat; i++) {
      for(var a = 0; a < 1; a++) {
      var value = data[a][0].toString();
      var numRepeat = data[a][1];
      str = str + value;
        }
      } 
    return str;
    };
    
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


const repeatNumbers = function(data) {
  var str = "";
  for(var a = 0; a < data.length; a++) {
    var value = data[a][0].toString();
    var numRepeat = data[a][1];
    for(var i = 0; i < numRepeat; i++) {
      str = str + value;
    }
// if you dont put a comma, the numbers all merge together.  you cant have the last value have a comma, so you will need to use data.length
    if (a < data.length - 1) {
      str = str + ", ";
    }
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


// try tomorrow with brackets and see how that goes