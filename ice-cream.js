// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
var iceCreamFlavoursDupe = [...iceCreamFlavours];
iceCreamFlavoursDupe.push("root beer");
console.log(iceCreamFlavoursDupe);
console.log(iceCreamFlavoursDupe[0]);
console.log(iceCreamFlavoursDupe[iceCreamFlavoursDupe.length - 1]);
console.log(iceCreamFlavoursDupe.length)


var iceCreamFlavoursDupe = iceCreamFlavours.map("root beer");
console.log(iceCreamFlavoursDupe);