/*
if (1 === "1") {
    console.log (true);
}
else {
    console.log (false);
}

if (1 != "1") {
    console.log (true);
}
else {
    console.log (false);
}


let age = 27;
let country = "UK";

if (age > 17 && country == "UK") {
    console.log ("I can serve you")
}
else {
    console.log ("I cannot serve you")
}


let password = "lollipop";
if (password.length < 8) {
    console.log ("Access Denied")
}
else if (password.length == 8) {
    console.log ("Access Granted")
}
else if (password.length > 8) {
    console.log ("Access Denied")
}


let num = 55
if (num % 3==0 || num % 5==0) {
    console.log ("This number is divisible by 3 or 5")
}
else {
    console.log ("This number is not divisible by 3 or 5")
}
*/
/*
let num = 60;
if (num % 3==0 && num % 5==0){
    console.log ("Fizz Buzz")
}
else if (num % 3==0){
    console.log ("Fizz")
}
else if (num % 5==0){
    console.log ("Buzz")
}
else {
    console.log (num)
}



let num = 2009
if (num.toString() == num.toString().split("").reverse().join("")){
    console.log ("This is a Palindrome")
}
else {
    console.log ("This is not a Palindrome")
}


let time = 18
let placeOfWork = "Manchester";
let townOfHome = "Crewe";

if (time < 8) console.log(`I am in ${townOfHome}`)
else if (time > 17) console.log(`I am commuting from ${placeOfWork} to ${townOfHome}`)
else if (time >= 9) console.log(`I am in ${placeOfWork}`)
else if (time = 8) console.log(`I am commuting to ${placeOfWork}`)


string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log(string.lastIndexOf("a")) 
console.log(string.lastIndexOf("e"))
console.log(string.lastIndexOf("i"))
console.log(string.lastIndexOf("o"))
console.log(string.lastIndexOf("u"))



let word = "prop"
if (word.substr(-1,1) == word.substr(0,1)){
    console.log("True")
}
else {
    console.log ("False")
}

*/

let num1 = 4
let num2 = 90
let result = ((+num1) + (+num2))
if (result %2==0){
    console.log(result)
}
else console.log((num1) * (num2))

