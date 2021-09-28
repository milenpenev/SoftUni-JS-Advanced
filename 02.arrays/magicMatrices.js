function magicMatrix(arr) {
    let result = 0;
    let currentResult = 0;
    let isMagicMatrix = false
    for (let col = 0; col < arr.length; col++) {
        for (let row = 0; row < arr[col].length; row++ ){
            currentResult += Number(arr[col][row]);
            if (col == 0 && row == arr[col].length-1) {
                result = currentResult 
            }
                }
        if (result == currentResult){
            isMagicMatrix = true;
        } else {
            isMagicMatrix = false;
            break;
            }
        currentResult = 0;
                
            }
    return isMagicMatrix;
}
    


console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))

console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ))

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))