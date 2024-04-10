// let Pascal / Cobol 

// Block Scope

let varName = 'varValue';
if (true) {
    varName = "New Variable Name";
}

const AGE = 32;

if (true) {
    const age = 35;
}
// console.log(AGE);

const ARRSTUDENTS = ['Student1', 'Student2', 'Student3'];
if (true) {
    ARRSTUDENTS.push('Student4');
}
console.log(ARRSTUDENTS);