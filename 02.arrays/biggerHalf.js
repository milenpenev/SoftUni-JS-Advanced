function biggerHalf(array) {
    const newArray = array.sort((a, b) => a - b);
    const bigger = newArray.slice(array.length / 2)
    console.log('[' + bigger.join(', ') + ']')
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])