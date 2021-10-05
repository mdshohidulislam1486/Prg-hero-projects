const products =[
    {name: 'laptop', price:32000, brand:'Lenovo', color:"Sivler"},
    {name: 'Phone', price:21111, brand:'iPhone', color:"Mate Black"},
    {name: 'Watch', price:50000, brand:'Citizen', color:"Golden"},
    {name: 'Sunglass', price:2000, brand:'Topfan', color:"black"},
    {name: 'Camera', price:5000, brand:'Canon', color:"brown"},
    {name: 'Mouse', price:320, brand:'Logitec', color:"Red"}
]

// const brands = products.map(product=>product.brand)
// console.log(brands)

// const prices = products.map(product =>product.price)
// console.log(prices)

// if you dont need return  

// products.forEach(product => console.log(product.color))

// products.forEach(product => console.log(product))

// you can write multi line code with for each too

// filter
const cheap = products.filter(product => product.price <= 10000);
console.log(cheap)

// containing N 

const specName = products.filter(product => product.name.includes("n"))

console.log(specName)


// find to find the first mathc only while filter will get all match 
// you sould notice filter give you array here but find give you an object
const special = products.find(p =>p.name.includes('n'))
console.log(special)