/*
let favSong = [
    "Joji - Sanctuary",
    "Five Finger Death Punch - Coming Down",
    "Rammstein - Radio"
];
console.log(favSong[0]);

console.log(favSong.length);

favSong.pop();
console.log(favSong);

*/

let favWebsites = [
    "Google",
    "Reddit",
    "Ebuyer"
]
console.log(favWebsites);

favWebsites.push("Youtube", "Netflix");
console.log(favWebsites);

favWebsites.pop();
console.log(favWebsites);
//This removes Netflix

favWebsites.shift();
console.log(favWebsites);
//This removes Google

favWebsites.unshift("Facebook");
console.log(favWebsites);
//This adds Facebook to the start

let compParts = favWebsites.slice(2,3)
console.log(compParts)
//This makes a new array with parts of the old array

favWebsites.splice(1,1, "Yahoo", "Bing")
console.log(favWebsites)

