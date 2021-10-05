// javaScript objec
// what is javascript object notation JSON

const user ={id:11, name:'Gorim Amin', Job:'Actor'}
const stringified = JSON.stringify(user)

// console.log(stringified)
// console.log(user)

const shop ={
    name:'Alia Store',
    address: 'Ranvir Road',
    profit:15000,
    products:['Laptop', 'Mobile', "Pepsi"],
    onwner: {
        name:'Alia Bhat',
        profession:'Actress'
    },
    isExpensive: false
}
const shoptStrigified = JSON.stringify(shop)
// console.log(shop)
console.log(shoptStrigified)

const converted  = JSON.parse(stringified)
console.log(converted)