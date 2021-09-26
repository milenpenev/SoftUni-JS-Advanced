function solve(matrix) {
    let biggest = '';
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++){
        for (let row of matrix) {
            for (let col of row){
            if (col >= biggest){
                biggest = col
            }
        }
    }
    console.log(biggest)
}


solve([[20, 50, 10],
[8, 33, 145]]
)

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )