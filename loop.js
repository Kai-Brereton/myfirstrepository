/*
for(i = 0 ; i < 10 ; i++ ){
    console.log(i);
}

for(i = 9 ; i > -1 ; i-- ){
    console.log(i);
}
*/

let favFilm = [
    "Sin City",
    "Saving Private Ryan",
    "We were soldiers",
    "Iron Giant",
    "Kingdom of Heaven"
];

favFilm.push("Crash", "FF7 Advent Children")

for(filmIndex = 0 ; filmIndex < favFilm.length; filmIndex++ ){
    console.log(favFilm[filmIndex])
}
const filmCheck = () => {
    if(favFilm[2] == "Ghostbusters"){
        console.log("Yay, It's Ghostbusters");
    }
    else{
        console.log("Boo, we want Ghostbusters");
    }
}
filmCheck();

//This seems to be gree on the left hand panel

