function highAndLow(numbers){
    numbers = numbers.split(' ');
    let highest = Number.MIN_VALUE;
    let lowest = Number.MAX_VALUE;
    for (let i = 0; i < numbers.length; i++){
        let currentNumber = numbers[i]
        if (Number(currentNumber) > highest) {
            highest = Number(currentNumber)
        }
        if (Number(currentNumber) < lowest) {
            lowest = Number(currentNumber)
        }
    }
    return `${highest} ${lowest}`;
  }

  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))