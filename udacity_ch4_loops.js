var start = 0;
while(start < 10) {
  console.log(start);
  start = start +2;
}

var start = 0;
while(start < 10){
  console.log(start);
  start += 2;
}

var x = 10;
var count = 0
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
  count ++;
}
console.log(count)


/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 20) {
    if(x % 3 === 0) {
      console.log("Julia");
    }else if (x % 5 === 0) {
      console.log("James");
    }else if ((x % 3 === 0) && (x % 5 === 0)) {
      console.log("JuliaJames");
    }else {
      console.log(x)
    }
    x ++ ;
}


var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num > 0) {
   if(num === 1) {
    console.log('1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!');
   } else if (num ===2) {
    console.log('2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!');
   }
   else {
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
   }
   num --;
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

i = 60

while(i >= 0){
  if( i === 50){
    console.log('Orbiter transfers from ground to internal power');
  } else if( i === 31){
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if( i === 16){
    console.log('Activate launch pad sound suppression system');
  } else if( i === 10){
    console.log('Activate main engine hydrogen burnoff system');
  } else if( i === 6){
    console.log('Main engine start');
  } else if( i === 0){
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log(`T-${i} seconds`);
  }
  i--;
}

/*
 * Programming Quiz: Changing the Loop (4-4)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// fix the for loop
for (x < 10; x++) {
  console.log(x);
}
//solution
for (var x = 5; x < 10; x++){
  console.log(x)
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// fix the for loop
for (var k = 0 k < 200 k++) {
  console.log(k);
}
//solution
for (var k = 0; k < 200; k++) {
  console.log(k)
}

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);



/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
 
// Write your code here

for(i = 0; i <= 25; i++){
  for( a = 0; a <= 99; a++){
    console.log(`${i}-${a}`);
  }
}