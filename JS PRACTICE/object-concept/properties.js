
const bottle = {color:"yellow", hold:'water', price:50, isClined:true};

//1 how to get properties name or key 
const keys = Object.keys(bottle);
// console.log(keys)

//2 how to get propeties value only 
const values = Object.values(bottle)
// console.log(values)


//3 this will show evry key and value pair as single array 
const paris =Object.entries(bottle)
//  console.log(paris)

//3 if you use Object.seal you cannot delete add  anythin inside but you can change the value 
Object.seal(bottle)

//4 if you use freeze you can not add, delete or change value 
Object.freeze(bottle)


bottle.prie=100; this /*  property will change for seal*/
bottle.height = 16; /* this property is not added  */

//5 you cna delete by using delete
 delete bottle.isClined;
 console.log(bottle)

