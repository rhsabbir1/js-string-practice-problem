const song = 'asber kal e aslam aka jaiber kale jamu aka..........';
const search = 'JaiBer';

const sarchLowerCase = search.toLowerCase();
const songLowerCase = song.toLowerCase();

const isexist =songLowerCase.includes(sarchLowerCase);
const oneLineIsexist = song.toLowerCase().includes(search.toLowerCase());

console.log(oneLineIsexist)
console.log(isexist)  
