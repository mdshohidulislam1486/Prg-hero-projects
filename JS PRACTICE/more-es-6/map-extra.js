const friends  =['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaimna'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products  = [
    {name:'Water Bottle ', price:'50', color:'yellow'},
    {name:'Phone ', price:'15000', color:'Black'},
    {name:'Watch ', price:'100', color:'white'},
    {name:'PC', price:'8000', color:'Blue'}, 
    {name:'Water Glass', price:'3', color:'White'}
]

const productsName = products.map(product => product.name);
console.log(productsName)
const productPrices = products.map(product =>product.price)
console.log(productPrices)

products.map(product=>console.log(product))

// if you want to use forEach but do not need any return 
// for each will do same work as map but will not reaturn any thing

products.forEach(product =>console.log(product))