/* // declear three variable

var number = 1;
var string = "This is so easey";
var isHeDead = true;


// declear two variable one with let and another with constant 
let fundamentalJs = 12;
const fundamentalCSS= 5;
fundamentalJs = fundamentalCSS;

// declear 2 variable and apply all simple math operator

let num1= 7;
let num2 = 2;

const sum = num1 + num2;
console.log(sum)

const subtraction = num1-num2;
console.log(subtraction);

const multification = num1 * num2;
console.log(multification)
 
const divide = num1/ num2
console.log(divide)

const remain = num1%num2
console.log(remain) 
 */


// 4. comparison between 2 variable 

/* let num1= 13;
let num2= 15;

 if(num1 == num2){
     console.log("These two number are equal")
 }else {
     console.log("These numbers are different")
 }

 if(num1> num2){
     console.log("Num1 is greater than num2")
 } else {
     console.log("Num1 is smaller than num2")
 }

 if(num1< num2){
    console.log("Num2 is greater than num1")
} else {
    console.log("Num2 is smaller than num1")
}
if(num1 != num2){
    console.log("Both number is different")
}else{
    console.log("Both number is equal")
}
if(num1 <= num2){
    console.log("num1 is smaller equal to num 2")
} else {
    console.log("num1 is greater than num2")
}

if(num1 >= num2){
    console.log("num1 is bigger or equal  to num 2")
} else {
    console.log("num1 is smaller than num2")
} */

// 5. fullfill both condition . or full fill one conditins 

/* let num1 =[15, 12, 20, 30, 13 ];

for(let i=0; i<num1.length; i++){
    let num = num1[i];
    if(num % 3 == 0 && num % 5 == 0){
     console.log("Meet the both condition", num);
    }
}
 for(let i=0; i<num1.length; i++){
     let num= num1[i];
     if(num % 3 ==0 || num % 5 == 0){
         console.log("Meet any of the conditions", num)
     }
 } */



//  6 can you use if ealse 
/* let num1= 5;
let num2 = 10;
if(num1 > num2){
    console.log("Number one is greater than number 2")
} else if (num2 % 2 == 0 ){
console.log("Number two is a even number")
} else {
    console.log("Shit any of the before conditoins is right")
} */

// 7 whiel loop  7 to 19 odd number 

/*  for(let i=7; i <= 19; i++){
     const oddNum = i;
     if(oddNum % 2 == 1){
        console.log(oddNum)
     }  
 } */

//  8 declar an array number of leement, replace 4th position, add or remove an element/ check specific value include in array

/* let nameOf =["Tamim", "Ranu", "Imran", "Sakil", "Sobuj", "Tariq"]

// const length = nameOf.length;
// console.log(length)

nameOf[4] ="Kamrul"

nameOf.push("Anwar")


nameOf.pop()
console.log("This is after removing the last", nameOf) */


// 9 use any for loop to display ever element of an array 

// nameOf =["Tamim", "Ranu", "Imran", "Sakil", "Sobuj", "Tariq"]

// for(let i=0; i<nameOf.length; i++){
//     const showArray = nameOf[i]
//     console.log(showArray)
// }
// // alternative 
// for(const name of nameOf){
//     const showArray = name;
//     console.log("This one is the alternative for loop ", showArray)
// }

// 10 . you have an array of random of nubmers show numbers bigger than 80

/* let randomNum = [99, 23, 75, 22, 87, 101, 33, 44, 91, 80]

for(const random of randomNum){
    const moreTahanEighty = random 
    if(random>80){
        console.log(random)
    }
}
 */

// 11 take three perameter and return their multificaitno throug a funciton 

/* function myFunction(num1, num2, num3){
    const sum = num1 * num2 * num3;
    return sum;
}

const multiOutput = myFunction(11, 5, 9);
console.log(multiOutput) */

// 12 declare an objec anc change any property of that object 

/* let myFried ={name:"Kamrul", age:27, weight:80}
myFried.name= "Saiful"
console.log(myFried); */
