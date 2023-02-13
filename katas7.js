const checkAir = function (samples, threshold) {
  var countDirty = 0;
  var total = samples.length;
  samples.forEach(function(i){
    if(i === 'dirty'){
      countDirty++;
    } 
  })
  if((countDirty/total) > threshold) {
  return "Polluted";
  } else if((countDirty/total) <= threshold) {
  return "Clean";
  } else "error";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
