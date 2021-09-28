// function names(array) {
//     array.sort()
//     const result = array.sort()
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i+1}.${array[i]}`);
//     }
// }

function names(array) {
    const result = array.sort((a,b) => a.localeCompare(b));
    let orderNumber = 1;
    array.forEach((el) =>{
        console.log(`${orderNumber}.${el}`);
        orderNumber++;
    })
}

names(["John", "Bob", "Christina", "Ema"]);