const myArr = [1, 2, 3, 40];

console.log(myArr);
console.log(myArr[1]);
myArr[1] = 20
console.log(myArr[1]);
console.log(myArr.length);
console.log(myArr[myArr.length - 1]);

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

for (let item of myArr) {
    console.log(item)
}

console.log(myArr.join())

for (let i = myArr.length - 1; i >= 0; i--) { //crawling from the last to the first 
    console.log(myArr[i])
}


myArr.splice(1, 1); // deletes the num on index 1, the second num  displays how much indexes to delete afte the first one.
console.log(myArr.join())

myArr.splice(3, 0, 35); // inserts num at index 3
console.log(myArr.join())


function compareNumbers(a, b) { // sort function for arrays
    return a - b; // ascending 
    // return b - a; descending
    //  if (a > b) {
    //      return 1;
    //  } else if (a == b) {
    //     return 0;
    //  } else {
    //      return -1;
    // }
}

myArr.sort((a, b) => a - b); //lambda function for sorting

// myArr.sort((a, b) => a.localeCompare(b)); // sorting alphabetical

//const numsAsString = ['1', '2', '3', '4'];

//const nums = numsAsString.map(Number); // converts strings to numbers


let arr = [[4, 5, 6]
[6, 5, 4]
[5, 5, 5]]

for (let row of arr) {
    for (let col of row) {
        console.log(col);
    }
}