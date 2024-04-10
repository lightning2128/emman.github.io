let Min = parseInt(prompt("Minimum Number"));
let Max = parseInt(prompt("Maximum Number"));

if (Min > Max) {
    alert("Invalid Input");
} else {

    for(var x = Min; x <= Max; x++) {
        console.log(x);
    }
}