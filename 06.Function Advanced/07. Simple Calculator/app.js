function calculator() {
    let firstInput;
    let secondInput;
    let resultBox;

    function init(sel1, sel2, sel3) {
        firstInput = document.querySelector(sel1);
        secondInput = document.querySelector(sel2);
        resultBox = document.querySelector(sel3);
    }

    function add() {
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }
    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


