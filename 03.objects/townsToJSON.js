function towns(array) {
    let result = []
    const splittedArray = array[0].split("|");
    const town = splittedArray[1].trim();
    const latitude = splittedArray[2].trim();
    const longtitude = splittedArray[3].trim();

    for (let i = 1; i < array.length; i++) {
        let obj = {};
        let splitted = array[i].split("|")
        let currTown = splitted[1].trim();
        let currLatitude = splitted[2].trim();
        let currLongtitude = splitted[3].trim();
        obj[town] = currTown
        obj[latitude] = Number(Number(currLatitude).toFixed(2))
        obj[longtitude] = Number(Number(currLongtitude).toFixed(2))
        result.push(obj)
    }
    return JSON.stringify(result)
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)