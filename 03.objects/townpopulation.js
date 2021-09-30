function population(array) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
        let [city,population] = array[i].split(' <-> ')
        if (city in result) {
            result[city] += parseInt(population)
        } else {
            result[city] = parseInt(population)
        }
    
    }
    for (let key in result) {
        console.log(`${key} : ${result[key]}`)
    }
}

population(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)