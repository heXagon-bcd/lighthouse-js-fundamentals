//We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

//If the number is a multiple of 3, print the string "Loopy" instead of the number.
//If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
//If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.


for(let i = 100; i <= 200; i++) {
  if( i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse")
  } else {
    console.log(i);
  }
}

Matches the expected pattern for each log
AssertionError: Make sure you're including 100 and 200!: expected 51 to equal 101
    at n.eval (eval at <anonymous> (https://flex-web.compass.lighthouselabs.ca/assets/application-87aa4b844e9723244bddb1c2092a014665faace7a2fe6c6811f4bf1ee0e6e210.js:2165:5020), <anonymous>:12:42)
    at t (https://cdnjs.cloudflare.com/ajax/libs/mocha/2.3.4/mocha.min.js:7:33286)
    at q.run (https://cdnjs.cloudflare.com/ajax/libs/m

const amounts = [61.00, 52.25, 112.99, 5.00]; 
console.log(amounts[1]);


let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);


const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

