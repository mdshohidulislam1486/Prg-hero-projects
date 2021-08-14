
// function fibonacci(n){
   
//     if(n==0 ){
//         return 0;
//     } 
//     if(n == 1 ){
//         return 1;
//     }

//     return fibonacci(n-1) + fibonacci(n-2);
// }

// var fibo = fibonacci(10);
// console.log(fibo)


function fibonacci(n){
   
    if(n==0 ){
        return [0];
    } 
    if(n == 1 ){
        return [0, 1];
    }
    const fibo = fibonacci(n-1)
    fibo[n] =fibo[n-1] + fibo[n-2]

    return fibo;

}

var fiboSeri = fibonacci(10);
console.log(fiboSeri)