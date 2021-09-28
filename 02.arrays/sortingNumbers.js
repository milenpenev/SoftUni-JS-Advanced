function sortingNumbers(arr) {
    const result = [];
    const arrayLength = arr.length
    arr = arr.sort((a, b) => a - b);
    // arr.forEach(element => {
    //     result.push(arr.shift());
    //     result.push(arr.pop());
    // });
    // for ( let i = 0; i< Math.floor(arrayLength/2); i++) {
    //     result.push(arr.shift());
    //     result.push(arr.pop());
    // }
    while (arr.length != 0) {
        result.push(arr.shift());
        result.push(arr.pop())
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))