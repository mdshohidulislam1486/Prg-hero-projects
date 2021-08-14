/* const products = [
    { name: "laptop", price: 54000},
    {name: "shirt", price: 500},
    { name: "Watch", price: 4000},
    {name: "PHone", price: 15000}
];

let totalPrice = 0;

for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice) */

const cart = [
    { name: "laptop", price: 54000,  quentity:1},
    {name: "shirt", price: 500,  quentity:5},
    { name: "Watch", price: 4000,  quentity:3},
    {name: "Phone", price: 15000,  quentity:2}  
]; 

let cartTotal = 0;
for (const product of cart){
   
    const productTotal = product.price * product.quentity;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal)
