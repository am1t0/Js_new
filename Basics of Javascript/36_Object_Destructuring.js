// -------DESTRUCTURING IN OBJECT--------

const band = {
    name : "The Script",
    famousSong : "Hall of Fame",
    followers : "26 million"
}
/* 
const bandName = band.name;
const song = band.famousSong;
console.log(bandName,song)
*/

const {name:bandName,famousSong:song,...rest} = band

console.log(bandName,song)
console.log(rest)