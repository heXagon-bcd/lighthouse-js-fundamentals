/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  // your code goes here
  close: function(){
    if(umbrella.isOpen === true){
      umbrella.isOpen = false;
      return "the umbrella is now closed";
    } else if(umbrella.isOpen === false) {
      umbrella.isOpen = true;
      return "the umbrella is now open";
    }
  }
}

console.log(umbrella.close())
console.log(umbrella.isOpen)



/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */

// your code goes here
var breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function summary() {
    return `Welcome!\nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`
  }
};

console.log(savingsAccount.printAccountSummary());



/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

var facebookProfile = {
  name: "Shawn He",
  friends: 500,
  messages: ["love u", "hi", "bye"],
  postMessage: function addMessage(message) {
    this.messages.push(message);
  },
  deleteMessage: function remMessage(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function addfrd() {
    this.friends ++;
  },
  removeFriend: function remfrd() {
    this.friends --;
  },
  printSummary: function print() {
    return `Hi ${this.name}!\nYou have ${this.friends} friends. Here are your newest messages:\n${this.messages}.`;
  }
}
facebookProfile.addFriend();
facebookProfile.deleteMessage(1)
console.log(facebookProfile.printSummary())


/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

console.log(donuts[1].type)

// your code goes here
donuts.forEach(function(element,index) {
  console.log(`This ${donuts[index].type} costs ${donuts[index].cost}.`)
}
)