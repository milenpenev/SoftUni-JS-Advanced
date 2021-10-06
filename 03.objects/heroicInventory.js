function inventory(arr) {
    const result = [];

    arr.forEach(element => {
        let [name, level, items] = element.split(" / ");
        result.push({
            name,
            level: Number(level),
            items: items ? items.split(", ") : []
        })
    });
    return JSON.stringify(result)
}


console.log(inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))