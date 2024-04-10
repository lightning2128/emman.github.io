//while
//do while


// if(condition == true) {
//     statements
// }

//for 
// 1. initialization;
// 2. condition;
// 3. statements;
// 4. incrementation / decrementation;

var Start = 0;
var End = 5;

// x++ = x + 1;
// break; to stop the loop
// continue; to skip an item in loop
for (var x = Start; x <= End; x++) {
    if (x == 3) {
        break;
    }
    console.log(x);
}