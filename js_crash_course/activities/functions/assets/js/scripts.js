let Min = parseInt(prompt("Minimum Number"));
let Max = parseInt(prompt("Maximum Number"));

loop(Min, Max);

function loop(min, max) {
    if (min > max) {
        alert("Invalid input");
        return;
    }

    if (min <= max) {
        if ( (min % 2) == 0) {
            console.log(min);
            min++;
            loop(min, max);
        } else {
            min++;
            loop(min, max);
        }
    } else {
        console.log("**End of Program**");
        return;
    }
}