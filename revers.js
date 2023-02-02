function textRevers(text){
    let revers ='';
    for(let i = text.length-1; i >= 0; i--){
        const index = i;
        const element = text[index]
          revers = revers + element;
          console.log(element,revers)
    }
    console.log(revers)
}

var text = 'I am a good boy';
var revers = textRevers(text)


function numberReturn(num){
    let store = ''
    for(let i = 1; i < num; i++){
        const num = i;
        store = store + num;
        console.log(store)
    }
}

numberReturn(10)