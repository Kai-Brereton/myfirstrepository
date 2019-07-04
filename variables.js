/*let myName = "Kai"
console.log(myName)

let favouriteDrink = "Coke";
console.log (favouriteDrink);

let myName = "Kai"
let favouriteDrink = "Coke"
console.log ("My name is " +myName + " and my favourite drink is " +favouriteDrink)
console.log (`My name is ${myName} and my favourite drink is ${favouriteDrink}`)

let myName = "Pete";
let myAge = "35";
let myColour = "Orange";
console.log(`My name is ${myName}, I am ${myAge} and my favourite colour is ${myColour}.`);
*/

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log("     |     |    ");
console.log(`  ${space1}  |  ${space2}  |  ${space3}  `);
console.log("     |     |    ");
console.log("-----------------");
console.log("     |     |    ");
console.log(`  ${space4}  |  ${space5}  |  ${space6}  `);
console.log("     |     |    ");
console.log("-----------------");
console.log("     |     |    ");
console.log(`  ${space7}  |  ${space8}  |  ${space9}  `);
console.log("     |     |    ");

if (space1 && space2 && space3 == "X"){
    console.log("Winner!")
}
if (space1 && space2 && space3 == "O"){
    console.log("Winner!")
}

