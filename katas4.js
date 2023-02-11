const instructorWithLongestName = function(instructors) {
  var store = 0;
  var names = [];
  for(var i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > store) {
      var store = instructors[i].name.length;
      var names = instructors[i];
    }
  }
  return names;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


////
var names =
[
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
];

console.log(names[1].name.length);


var names =
[
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
];

let namesOnly = names.map(function(person) {
  return person.name;
});
console.log(namesOnly);
