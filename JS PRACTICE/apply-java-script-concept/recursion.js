// as a example 3 factorial is 3! = 3 X 2 X 1 
// as a example 3 factorial is 4! = 4 X 3 X 2 X 1 
// as a example 3 factorial is 5! = 5 X 4 X 3 X 2 X 1 

// now 4 factorial mean 4 * 3! factorial
//  n! = n* (n-1) as an example 7 factorail n! = n(7) * (n(7)-1)! so you can say 7! = 7 *(7-1)!

// if call same funciont inside funciton it's call recursion 

/* function factorialRecursive(n){
    // this is call stoppping for recusion 
    if (n==1){
        return 1;
    }
   return n * factorialRecursive(n-1);
}

var factorial = factorialRecursive(6);
console.log(factorial)
 */
function factorialRecursive(n){
    if(n==1){
        return 1;
    }
    return n * factorialRecursive(n-1);
}

var factorialNumber = factorialRecursive(5);
console.log(factorialNumber)