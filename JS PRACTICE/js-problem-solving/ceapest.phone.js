/* const phones = [
    {
        name:"samsung s5", price: 45000, camera:15, storage:32
    },
    
    {
        walton:"walton Prmimo 5", price: 15000, camera:15, storage:15
    },
    {
        name:"Xiomi realme", price: 25000, camera:20, storage:32
    },
    {
        name:"htc", price: 55000, camera:13, storage:100
    },
    {
        name:"Oppo", price: 23000, camera:8, storage:60
    }
];

let cheapest = phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price<cheapest.price){
        cheapest =phone;
        
    }
} 
console.log(cheapest)
*/

var phones = [
    {name:"Xiomi", price:12000, camer:15, storage:30},
    {name:"Realme", price:14000, camer:10, storage:60},
    {name:"Samsung", price:20000, camer:8, storage:30},
    {name:"Nokia", price:15000, camer:12, storage:15},
    {name:"Iphone", price:13000, camer:8, storage:30},
    {name:"Symphony", price:11000, camer:12, storage:14}
];

let cheapest = phones[0]
for(const phone of phones){
    if(phone.price< cheapest.price){
        cheapest = phone;
    }
}

for(let i=0; i<phones.length; i++){

}

console.log(cheapest)


