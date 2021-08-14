const business= 450;
const minister = 350;
const army = 600;


// if (business> minister){
//     console.log("Business is the bigger number")
// } else{
//     console.log("Minister is the bigger number")
// }


// you can use Math.max and Math.min to get largest and smallest 
var max = Math.max(business, minister, army);
console.log("largest is ", max)

// for 2 number you can make the function 

function largestNumber(first, second){
    if (first> second){
        return first;
    } else{
        return second;
    }
}

const largest = largestNumber(244, 6656);
console.log(largest)