function calories(array) {
    const result = {};

    for (let i = 0; i< array.length; i+=2){
        result[array[i]] = parseInt(array[i+1]);
    }
    console.log(result)

}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])