
function funcName() {
    console.log(this);
}
// funcName();

const fn = () => {
    console.log(this);
}
// fn();

const fnName = function() {
    console.log(this);
}

// //arrow functions
// const fn = (fname, lname) => [fname, lname].join(" ");
// console.log( fn('Jesthony', 'Morales') );


document.getElementById("btn1").addEventListener('click', funcName);