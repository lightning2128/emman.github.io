function performOperation(operation) {
    let firstNumber = document.getElementById("num-first-number").value;
    let secondNumber = document.getElementById("num-second-number").value;
    let total;

    if (operation === 'add') {
        total = parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operation === 'sub') {
        total = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operation === 'mul') {
        total = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operation === 'div') {
        total = parseInt(firstNumber) / parseInt(secondNumber);
    } else {
        total = 0;
    }

    document.getElementById("num-total").value = total;
}
