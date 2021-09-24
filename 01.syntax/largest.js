function largest(numberOne, numberTwo, numberThree){
    let largest = 0
    if (numberOne > numberTwo){
        if (numberOne > numberThree){
            largest = numberOne;
        }
        else {
            largest = numberThree;
        }
    }
    else if (numberTwo > numberThree){
        largest = numberTwo;
    }
        else{
            largest = numberThree;
        }
console.log(`The largest number is ${largest}.`)
}

largest(6,7,5)