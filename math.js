const result = Math.pow(4 ,2);
console.log(result)

var num1 = 15;
var num2 = 25;

var gap = Math.abs(num1 - num2);
console.log(gap)
if(gap < 5){
    console.log('Kase aso Kase aso ')
}
else{
    console.log('Dure Dure thako')
}

// var randomNumber= Math.random()*4;
// console.log(randomNumber)

function randomNumber(randomNumbers){

    for(let i = 0; i <= randomNumbers; i++){
        var random =Math.random()*i;
        var randomPreseInt = parseInt(random);
        console.log(randomPreseInt)
    }
}

randomNumber(10)

// var a = 2.22220001155511;
// var towDecmel = a.toFixed(2)
// var towDecmelNum = parseFloat(towDecmel)
// console.log(towDecmelNum)