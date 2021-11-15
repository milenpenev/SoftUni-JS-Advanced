function solve(input) {
    let carBrands = new Map();

    input.forEach(element => {
        let [brand, model, count] = element.split(" | ");
        price = Number(count);
        if (carBrands.has(brand)) {
            let carBrand = carBrands.set(brand);
            if (carBrand.has(model)) {
                let carModel = carBrand.get(model);
                carModel += count;
                carBrand.set(model. carModel)
            } else {
                carBrand.set(model, count);
            }
        } else {
            carBrands.set(brand, new Map());
        }
    });
    for (const key of carBrands.keys()){
        console.log(key);
        let brand = carBrands.get(key);
        for (const [model, count] of brand) {
            console.log(`###${model}, -> ${count}`)
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)