function storeCatalogue(array) {
    const result = {}

    array.forEach(element => {
        let [product, price] = element.split(" : ")
        if (!result[product[0]]){
            result[product[0]] = {}
        }
        result[product[0]][product] = price
    });
    let initialSort = Object.keys(result).sort((a,b) => a.localeCompare(b))

    for (const key of initialSort) {
        let products = Object.entries(result[key]).sort((a,b) => a[0].localeCompare(b[0]))
        console.log(key);
        products.forEach((element) =>{
            console.log(`  ${element[0]}: ${element[1]}`)
        })
    }
}


storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)