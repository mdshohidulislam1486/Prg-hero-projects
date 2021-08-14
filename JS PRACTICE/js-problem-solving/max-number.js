 // finding out the largest 


// function largestElement(numbers){
// let largest = numbers[0];
// for(let i=0; i< numbers.length; i++){
//     const number = numbers[i]
//     if(number > largest){
//         largest = number;
//     }
    
// }
// return largest;

// }





// const ages= [12, 54, 2, 34, 23, 45, 32, 74]
// const oldest= largestElement(ages)
// const oldest2 = largestElement([-12, -7, -8, -9])
// console.log(oldest)
// console.log(oldest2)


// finding out the lowest 


function lowestElement(number){
    let lowest = number[0]
    for(let i =0; i<number.length; i++){
        const numbers = number[i];
        if(numbers < lowest){
        lowest = numbers
        }
    }
    return lowest;
}

const ages = [23, 34, 65, 75, 13, 2, 5]
const smallest = lowestElement(ages); 
console.log(smallest)