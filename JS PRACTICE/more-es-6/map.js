/* const numbers= [4, 6, 7, 10];

const output =[];
const doubleIt =number=>  number *2;


for(const number of numbers){
    const result= doubleIt(number);
    output.push(result);
}

console.log(output) */

// This is the alternative of for the previous few line 
/* const numbers= [4, 6, 7, 10];
const doubleIt =number=>  number *2;

const output2 = numbers.map(doubleIt);
console.log(output2) */

// another alternative is 

const numbers= [4, 6, 7, 10];
const output3 = numbers.map(number=>number*2)
console.log(output3)

const output4 = numbers.map(x=>x*2)
console.log(output4)


const squares = numbers.map(x => x * x)
console.log(squares)