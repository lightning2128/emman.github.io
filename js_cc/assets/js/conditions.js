
// kapag male, 18 and above
// kapag female, 15 and above

var Age = 17;
var Gender = "female";
//condition
// block of code
// ==
// >=
// <=
// !=

// AND (&&) or OR (||)
// if (Gender == "male" && Age >= 18) 
// {
//     console.log("Congratulations! 1 ");
// }
// else if (Gender == "female" && Age >= 15) 
// {
//     console.log("Congratulations! 2");
// } 
// else 
// {
//     console.log("You are not allowed on this website!");   
// }

// if ( Age >= 18 ) {
//     //statements
//     console.log("Congratulations");
// } else {
//     console.log("You are not allowed to enter this website!");
// }

// 1 = 90-100
// 2 = 80-89
// 3 = 70-79

// 5 = <70

var Grade = 78.4;

if (Grade >= 90 && Grade <= 100)
{
    console.log(`Your Grade : ${Grade} = 1`);
}
else if (Grade >= 80 && Grade <= 89.9)
{
    console.log(`Your Grade : ${Grade} = 2`);
}
else if (Grade >= 70 && Grade <= 79.9)
{
    console.log(`Your Grade : ${Grade} = 3`);
} 
else
{
    console.log(`Your Grade : ${Grade} = 5`);
}