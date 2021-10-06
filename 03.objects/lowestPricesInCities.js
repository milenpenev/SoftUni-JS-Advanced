function lowestPrice(array) {
    let catalogue = {};

    array.forEach(element => {
        let [town, product, price] = element.split(" | ");
        price = Number(price);

        if (!catalogue[product]){
            catalogue[product] = {};
        }
        catalogue[product][town] = price;
    });
    console.log(catalogue)

}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)