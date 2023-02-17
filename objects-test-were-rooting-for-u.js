const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
var score = [];

function judgeVegatble(vegetables, metric) {
  for (var i = 0; i < vegetables.length; i++) {
    score.push(vegetables[i].redness);
  }
  score.sort((a,b)=>a-b);
  return score;
  }

  var index = score.findIndex(function (element){
    return index = score[score.length];
  })

console.log(judgeVegatble(vegetables,metric));
console.log(index);
console.log(vegetables);

// the below works
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
var copyVega = [];

  vegetables.sort(function(a,b){
  return a.redness - b.redness;
  })
vegetables.forEach((vegetables) => {
  copyVega.push(vegetables);  
}
)

console.log(vegetables);
console.log(copyVega[2].submitter);


//iontegrating judge vegetables
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
var copyVega = [];

vegetables.sort(function(a,b){
  return a.redness - b.redness;
  })
vegetables.forEach(vegetables);

function myFunction(vegetables){
  copyVega.push(vegetables);
}

console.log(vegetables);
console.log(copyVega);
console.log(judgeVegetable(vegetables,metric));

//works but fails test
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
var score = [];

function judgeVegetable(vegetables, metric) {
  for (var i = 0; i < vegetables.length; i++) {
    score.push(vegetables[i].redness);
  }
  score.sort((a,b)=>a-b);
  return vegetables[0].submitter;
}


console.log(judgeVegetable(vegetables,metric));