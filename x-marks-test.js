//north + 1, south -1 - Y axis
//east + 1, west, -1- x axis


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves){
  var x = 0;
  var y = 0;
  const coord = [];
  for(var i = 0; i < moves.length; i++) {
    if(moves[i] === 'north'){
      y++;
    } else if(moves[i] === 'south') {
      y--;
    } else if(moves[i] === 'east') {
      x++;
    } else if(moves[i] === 'west') {
      x--;
    } else {
      console.log("error");
    }
    console.log(x);
    console.log(y);
  }
  coord.push(x,y);
  return coord;
}

console.log(finalPosition(moves));


const direction = ['north', 'north', 'west', 'west', 'north', 'east','north'];

for(var i = 0; i < direction.length; i++){
  console.log(direction[i]);
}

