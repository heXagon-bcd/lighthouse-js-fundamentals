function reverseString(reverseMe) {
  var reversed = "";
  for(let i = reverseMe.length - 1; i>= 0; i--){
    reversed += reverseMe[i];
    console.log(reversed);
  }
  return reversed;
}

console.log(reverseString("Julia"));

function add(x,y){
  var sum = x + y;
  return sum;
}

var sum = add(1,2)
console.log(sum)


/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

function laugh() {
  var sound = `\"hahahahahahahahahaha!\"`;
return sound;
}

console.log(laugh());


/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

let x = '';

function laugh(num){
  for(let i = 0; i < num; i++) {
    x += 'haha';
  }
  x = x + "!";
  return x;
}
console.log(laugh(4));




let x = 'ha';
let num = 4;

for(let i = 0; i < num; i++) {
  x += 'ha';
  console.log(x);
}

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);


var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    console.log(c);
    function z() {
      var d = 4;
      console.log(c);
    }
    z();
  }
  y();
}

x();



function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
    console.log(line)
  }
  return line + "\n";
}

makeLine(10);


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(length) {
  var base = "";
  for (var i = 1; i <= length; i++){
    base = base + makeLine(i);
  }
  return base
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function(hello) {
  num = "";
  for(var i = 0; i < hello; i++) {
    num += "ha"
  }
  return num;
}

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

var cry = function sharon(t) {
  return "boohoo!";
}

console.log(cry());


/



/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions()



function func1(name) {
return "hello" + name
}

function func2(name) {
return "bye" + name
}

function movies(messageFunction, name) {
  messageFunction(name);
}

console.log(movies("sharon"))



// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expressio
emotions("happy", function myFunc(num) {
  var sound = "";
  for(i = 0; i < num; i++) {
    sound += "ha";
  }
  sound = sound + "!";
  return sound;
})'