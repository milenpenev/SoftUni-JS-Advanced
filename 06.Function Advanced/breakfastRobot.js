function robot() {
    const recipes = {
        apple: { protein:0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 }
    };

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    };

    function restock(element, quantity) {
        storage[element] += quantity;
        return `Success`;
    }

    function prepare(recipe, quantity) {
        const remainingStorage = {}

        for (const element in recipes[recipe]) {
            const remaining = storage[element] - recipes[recipe][element] * quantity;
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`
            } else {
                remainingStorage[element] = remaining;
            }
            
        }
        Object.assign(storage, remainingStorage);
        return `Success`;
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }
    function control(str) {
        const [command, item, quantity] = str.split(' ');
        switch (command) {
            case 'restock': return restock(item, Number(quantity)); 
            case 'prepare': return prepare(item, Number(quantity)); 
            case 'report': return report(); 
        }
    }
    return control;
}


let manager = robot();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4"));
console.log(manager('restock carbohydrate 10'));  // 'Success'],
console.log(manager('restock flavour 10'));  // 'Success'],
console.log(manager('prepare apple 1'));  // 'Success'],
console.log(manager('restock fat 10'));  // 'Success'],
console.log(manager('prepare burger 1'));  // 'Success'],
console.log(manager('report'));  // 'protein=0 carbohydrate=4 fat=3 flavour=5']