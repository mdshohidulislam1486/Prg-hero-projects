
const numbers = [2, 3, 33, 5, 9, 8, 22]
const student = {
    name: "Sakib Khan",
    age:32,
    movies: ['King Khan', 'Dhakar Mastan']
}


// template string 
const about = `My Name is ${student.name} I am ${student.age} years all. My Rool no is ${numbers[2]}. My favorite movies is ${student.movies[1]}`
console.log(about)

// 2. arrow funciotn 
const getFiftyFive = ()=>55;
const addNum = num=> num + 65;

const isEven =x=> x%2 ==0;
const isOdd = x => x%2 != 0;

const addThree =(x, y, z) =>x + y + z;

const doMath =(num1, num2)=>{
     const sum = num1 + num2
     return sum;
}

// spread operator this 

const newNumbers = numbers;

numbers.push(99)

// console.log(newNumbers)
// console.log(numbers)


// I don't want my new number connection with my old number 

const newNum1 = [...numbers]
newNum1.push(87)


// create a new array from an older array and add element to only new element
const currentNumber = [...numbers, 55, 22]

console.log(numbers)
console.log(newNum1)
console.log(currentNumber)