// how to declare an array 


const numbers = [2, 3, 33, 5, 9, 8, 22]
// numbe[0] =56;

for(let i=0; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number)
}


const student = {
    name: "Sakib Khan",
    age:32,
    movies: ['King Khan', 'Dhakar Mastan']
}


const myVariable = 'age'
// three ways to acces object 
console.log(student.age) 
console.log(student["age"])
console.log(student[myVariable])

// age 32 you will see 32 for three times 