

// if () {

// }

// for () {

// }

//parameters & arguments


var ReturnValue = funcName();

function funcName() {
    return "Hello World";
}

// let num1 = parseFloat(prompt("Enter First Number"));
// let num2 = parseFloat(prompt("Enter Second Number"));

// let Total = add(num1, num2);

// function add(numOne, numTwo = 0) {
//     return numOne + numTwo;
// }


//recursive function
let Min = parseFloat(prompt("Enter Minimum"));
let Max = parseFloat(prompt("Enter Maximum"));

mySelf(Min, Max);

function mySelf(min, max) {
    if (min > max)
        return;

    if (min % 2 == 0) //modulo => remainder
        console.log(min);

    min++;
    mySelf(min, max);
}