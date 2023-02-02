let first = 5
let second = 7

console.log(first , second);

// approch 1
const temp = first;
first = second;
second = temp;

// approch 2
[first , second] = [second ,first]

console.log(first , second);
