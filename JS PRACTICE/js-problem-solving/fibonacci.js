
// Exclude the first two (0, 1) rest of them are the summation of immedate first to numbers  

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 

/* 
3rd = 2nd + 1st 
4rd = 3nd + 2st 
5rd = 4nd + 3st 
6rd = 5nd + 4st
16th = 15th + 14th;
nth = (n-1) th + (n-2)th 
ith = (i-1) th = (n-2)th
*/

// const fibo = [0 , 1]
// for(let i= 2; i<=20; i++){
//     // nth = (n-1) th + (n-2)th 
//     // ith = (i-1) th = (n-2)th
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo)

function fiboSeries(num){
    if(typeof num != "number"){
        return "This is a string pleae enter a numeric number"
    } else if(num <= 2 ) {
        return "Please enter a positive number or number more than 2"

    }
    const fibo= [0, 1];
    
    for(let i=2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fibonuber = fiboSeries(3)
console.log(fibonuber)