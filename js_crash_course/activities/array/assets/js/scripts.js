let Evens = [];
let Odds = [];

loop();
function loop() {   

    let Number = prompt("Please enter a number greater than 0");

    if (Number > 0) {
        if (Number % 2 == 0)
            Evens.push(Number);
        else
            Odds.push(Number);

        loop();
    } else {
        console.log("Even Numbers : " + Evens.join(','));
        console.log("Odd Numbers : " + Odds.join(','));
        console.log("***End of Program***");
    }
}