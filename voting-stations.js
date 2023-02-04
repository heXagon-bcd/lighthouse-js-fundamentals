const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(stations){
  for (i = 0; i < stations.length; i++){
    for (x = 0; x < 3; x++){
      if x
    }
  }
}


//need to knwo number of times to loop in array, and within the array itself

var stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodstations =[];
  for(const station of stations ) {
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodstations.push(station[0])
    }
  }
   return goodstations;
}

console.log(chooseStations(stations))



