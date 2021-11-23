var number = function(busStops){
  let finalPeople = 0;
    for (busStop of busStops) {
      let [peopleIn, peopleOut] = [busStop[0], busStop[1]];
      // let peopleIn = busStop[0];
      // let peopleOut = busStop[1];
      finalPeople += Number(peopleIn);
      finalPeople -= Number(peopleOut);
    }
    return finalPeople
  }

console.log(number([[10,0],[3,5],[5,8]]))