// flase '', 0, null, undefined

//true 'alarm', 5, true, {}, []


// check truthy 
let myVar = 5;
if(myVar){
myVar = myVar * 5    
} else{
    myVar=0;
}



let myNum = 50;

// you can check falsy or negative like this 
if(!myNum){
    myNum = 0;
} else{
    myNum = myNum * 5
}

const money = 200;
let food;

if(money> 100){
    food = "Biryani"
} else{
    food = 'Cha biscut'
}

// ternary operator 

let food1  = money>100 ? 'Biryani': 'Cha biscuit'
console.log(food1)

let drink = (money>100 && myVar> 100)? 'coke' : 'filter water'


// number to string  conversion 
const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr)

//shortcut way to make string to number 
const input = '560';
const inputNum = +input

console.log(inputNum);


//
let isActive = true;

const showUser = ()=>console.log('dispalay User');
const hideUser = ()=>console.log('hide User');

isActive? showUser():hideUser();


// it will run if all terms are true other hand it will stop 

// if left side is true right side will be executed it kind of ternay operator different versin  
isActive && showUser();

// use if the left side is fasle then the right side will be executed 

isActive || hideUser()

// toggle boolean, it will make true to false and false to true 
isActive = !isActive