
// As you are using multiple operator you have to use 1 other case you can use 0

// let factorial = 1;
// for (let i= 1; i<=5; i++){
//     factorial= factorial * i;
// }
// console.log(factorial)


// function factNum(num){
//     var start =1;
//     for(i=1; i<=num; i++){
//         start = start * i
//     }
//     return start;
// }

// let factorial = factNum(10)
// console.log(factorial)

// function factNum(num){
//     let start =1 
//     let i=1;
//     while( i <= num){
//         start = start * i
//         i++;   
//     }
//     return start;

// }

// let factorial = factNum(10);
// console.log(factorial)


// This a reverse i 
function factName(num){
    let start =1 ;
    for (let i=num; i >= 1; i--){
        start =start * i;
    }
    return start;
}

let factorial = factName(10);
console.log(factorial)