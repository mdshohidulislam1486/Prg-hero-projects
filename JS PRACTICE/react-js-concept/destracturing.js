// array destractruing 

const numbers = [42, 65]

// const x = numbers[0]
// const y = numbers[1]


// const [x, y] =[42, 65]

const [x, y] = numbers;

// console.log(x, y)

function boxify (num1, num2){
const nums = [num1, num2]
return nums
}

const [first, second] =boxify(90, 34)
const getBox =boxify(90, 34)
console.log(getBox)

const  student = {
    name: "Sakib Khan",
    age:32,
    movies: ['King Khan', 'Dhakar Mastan']
}


// const [firstMovie, secondMovie] = ['King Khan', 'Dhakar Mastan']

const [firstMovie, secondMovie] = student.movies

console.log(firstMovie)

// object destructuring 
// seril is not matter for object but important for array 
// const {age, name}= {name:"Saleh Uddin", age:14 }


// const {age, name}= {id:12, name:"Saleh Uddin", age:14 }
// console.log(age)


const  employee = {
    ide :'Vs code',
    designitaion: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification:{
        height: 55,
        weight:67,
        address:'Mirpur',
        drink:'Soft Drnk',
        wtach:{
            color:'black',
            price:500,
            brand:'gramin'
        }
    }
}

// you can not do two level to gether with object 

const {machine, ide} = employee;

const{weight, address} = employee.specification;

const {color, brand}= employee?.specification.wtach;

console.log(weight)
console.log(brand)