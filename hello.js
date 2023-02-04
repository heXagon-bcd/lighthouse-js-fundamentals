const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

const sayHello = function(name){
  console.log("hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");




const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);