\const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);



const camelCase = function(input) {
  // use the split function to turn string into array by delimating by a space (' ')
  arr = input.split(' ');
  //write loop to go over the array
  for(var i = 0; i < arr.length; i++) {
  // select the array index and upcrase the first value, input the characters after the 0 index
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }
  //join the array into string using the join method
  return arr.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

arr = [ 'this', 'is', 'a', 'string' ];

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
}

console.log(arr)

console.log(arr[0][0].toUpperCase());

