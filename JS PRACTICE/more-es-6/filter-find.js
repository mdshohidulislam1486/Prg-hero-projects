const numbers = [5, 13, 4, 5, 6, 20, 43, 23, 64, 11, 65, 33, 75];

const bigNumbers = numbers.filter(number=> number>20);
console.log(bigNumbers)
const smallNumber = numbers.filter(number=> number <= 20);
console.log(smallNumber)

const products  = [
    {name:'Water Bottle ', price:'50', color:'yellow'},
    {name:'Phone ', price:'15000', color:'Black'},
    {name:'Watch ', price:'100', color:'White'},
    {name:'PC', price:'8000', color:'Blue'}, 
    {name:'Water Glass', price:'3', color:'White'}
]

const expensive = products.filter(product =>product.price > 100);
console.log(expensive)
const white = products.filter(product => product.color=='White')
console.log(white)

// find ............................

const whiteFind = products.find(product => product.color=='Black')

console.log(whiteFind)