const urlEncode = function(text) {
  var newText = text.replace(/ /g,"%20"); 
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));