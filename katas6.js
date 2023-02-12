const whereCanIPark = function (spots, vehicle) {
  var location = [];
  for (var i = 0; i < spots.length; i++) {
    for(var a = 0; a < spots[i].length; a++) {
      if(vehicle === 'regular' && spots[i][a] === 'R') {
        var location = [a, i];
        break;
      } else if (vehicle === 'small' && (spots[i][a] === 'R' || spots[i][a] === 'S')){
        var location = [a, i];
        break;
      } else if (vehicle === 'motorcycle' && (spots[i][a] === 'R' || spots[i][a] === 'S' ||spots[i][a] === 'M')){
        var location = [a, i];
        break;
      };
    }
    if(location.length !== 0) break;
  }
  return location;
};

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


const whereCanIPark = function (spots, vehicle) {
  var location = [];
  for (var i = 0; i < spots.length; i++) {
    for(var a = 0; a < spots[i].length; a++) {
      if(vehicle === "regular" && spots[i][a] === 'R') {
        location = [a, i];
        break;
      } else if (vehicle === "small" && (spots[i][a] === 'R' || spots[i][a] === 'S')){
        location = [a, i];
        break;
      } else if (vehicle === "motorcycle" && (spots[i][a] === 'R' || spots[i][a] === 'S' ||spots[i][a] === 'M')){
        location = [a, i];
        break;
      }
    }
    if (location.length !== 0) break;
  }
  return location.length !== 0 ? location : false;
};

console.log(whereCanIPark(
  [ ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))