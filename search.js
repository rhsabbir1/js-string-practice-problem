//------------------------------- Includes---------------------------------------
// ---------------------------------------------------------------------------

const song = 'asber kal e aslam aka jaiber kale jamu aka..........';
const search = 'JaiBer';

const sarchLowerCase = search.toLowerCase();
const songLowerCase = song.toLowerCase();

const isexist =songLowerCase.includes(sarchLowerCase);
const oneLineIsexist = song.toLowerCase().includes(search.toLowerCase());

console.log(oneLineIsexist)
console.log(isexist)  

//------------------------------- Index---------------------------------------
// ---------------------------------------------------------------------------
console.log(song.indexOf('aslam'))

if(song.indexOf('kale') !== -1){
    console.log('Exsist')
}
else{
    console.log('Not Exsist')
}

console.log(song.startsWith('asber'))
var photo = 'cover.png';
console.log(photo.endsWith("png"))
