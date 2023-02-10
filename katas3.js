const numberOfVowels = function(data) {
  const vowels = ["a", "e", "i", "o", "u"];
  const string = data;
  var count = 0;
  for (i = 0; i < vowels.length; i ++) {
    for(x = 0; x < data.length; x ++) {
      if (data[x] === vowels[i]){
        count ++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

