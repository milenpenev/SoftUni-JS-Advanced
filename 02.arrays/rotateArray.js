function rotate(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        const num = array.pop();
        array.unshift(num);
    }
    console.log(array.join(' '))
}

rotate(['1',
    '2',
    '3',
    '4'],
    2
)

