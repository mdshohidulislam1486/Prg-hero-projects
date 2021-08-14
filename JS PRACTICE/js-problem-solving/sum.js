// const numbers = [44,55, 223, 43, 77, 25, 86, 84, 45];


// let sum = 0;
// for (let i=0; i<numbers.length; i++){
//      const number = numbers[i]
//      sum = sum + number;

// }
// console.log(sum)


function arryTotal(numbers){
    let sum =0;
    for (let i=0; i<numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
       
    }
    return sum;
}
const total = arryTotal([33, 66, 23])

 console.log("array total ", total)