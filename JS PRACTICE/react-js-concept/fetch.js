// JSON

const  student = {
    name: "Sakib Khan",
    age:32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student)
console.log(student)
console.log(studentJSON)

const studentObj =JSON.parse(studentJSON)

console.log(studentObj)

// fetch must know the how featch its work

// object Keys and Value

const keys = Object.keys(student);
const values = Object.values(student)
console.log(keys)
console.log(values)


// for loop 

const numbers = [23, 42, 51, 32, 12, 98];

numbers.forEach(num => console.log(num))
numbers.map(num => num *2);

// for of on array like object 
//for in is for object 




// add or remove from an array 
const products =[
    {name: 'laptop', price:32000, brand:'Lenovo', color:"Sivler"},
    {name: 'phone', price:21111, brand:'iPhone', color:"Mate Black"},
    {name: 'Watch', price:50000, brand:'Citizen', color:"Golden"},
    {name: 'Sunglass', price:2000, brand:'Topfan', color:"black"},
    {name: 'Camera', price:5000, brand:'Canon', color:"brown"},
    {name: 'Mouse', price:320, brand:'Logitec', color:"Red"}
];

const newProduct = {name: 'Webcam', pric:700, brand:'Gothom'}

// add new product to an copy  of old proudcts 

const newProducts =  [...products, newProduct]

console.log(newProducts)


// create a new array without one specific item 

// here remove phone means new array without phones 

const remaining = products.filter(product => product.name !== 'phone')

console.log(remaining)