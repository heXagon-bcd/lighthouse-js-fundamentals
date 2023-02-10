function smartGarbage(trash, bins){
  var waste = bins;
  waste[trash]++;
  return waste;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));