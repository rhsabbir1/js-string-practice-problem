const jim = 69;
const dela = 97;
const nusu = 98;

// if(jim > dela){
//     console.log('Jim Get The Cake')
// }
// else{
//     console.log('Dela Get The Cake')
// }

if(jim > dela){
    if(jim > nusu){
        console.log('JIm Get The cake')
    }
}
else if(dela > nusu){
    console.log('Dela get the cake')
}
else{
    console.log("Nusu get the cake")
}

const win =Math.max(jim , dela, nusu);
// console.log(win)

function tollerPerson(value){
    let toller = value[0];
    for(let i =0; i < value.length; i++){
        const index = i;
        const element =value[index];
        if(element > toller){
            toller = element;
        }
    }
    return toller;
}

var hight = [150, 100, 200, 230 , 260, 250, 184, 180];
const toller = tollerPerson(hight)
console.log(toller)

