// array object arrow function function declreration function
// There are 7 types of data types on java script 
/* 
primitive data types 
1. number
2. string
3. boolean
4. undefined
5. null

7. symbol
object Number 6 is a No premetive type 
6. object
*/

let a = 'Hello';
let b = a
console.log(a, b)
a= "Hi"
console.log(a, b)
// for primitive mostly singel value 'b' value will not change here 

// for non primitve type (object) it will take the last value 
const x = {job: 'Web Developer'};
const y = x;
console.log(x, y)
x.job = "front End Developer"
console.log(x.job, y.job)