function cooking(num, op1, op2, op3 ,op4 ,op5) {
    num = Number(num);
    let chop = function() {
        num = num/2;
        return num;
    }
    let dice = function() {
        num = Math.sqrt(num);
        return num
    }
    let spice = function() {
        num = num + 1;
        return num;
    }
    let bake = function() {
        num = num*3;
        return num;
    }
    let fillet = function() {
        num = toFixed(num * 0.8);
        return num;
    }

    const arr = [op1, op2, op3 ,op4 ,op5];

    for (let i = 0; i < arr.length; i++){
        switch(arr[i]) {
            case "chop":
                console.log(chop());
                break;
            case "dice":
                console.log(dice());
                break;
            case "spice":
                console.log(spice());
                break;
            case "bake":
                console.log(bake());
                break;
            case "fillet":
                console.log(fillet());
                break;
    }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')