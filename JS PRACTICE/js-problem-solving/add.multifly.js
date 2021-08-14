/* function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}


const firstTotal = add(44, 22)
console.log(firstTotal)

const seconTotal = add(2343, 654)
console.log(seconTotal) */

/* 
chair  = 3 cft
table =10 cft
bed = 50 cft 
*/

/* function woodCount(chairQuantity, tableQuentity, bedQuentity){
const perChairWood =3;
const chairNeed = chairQuantity * perChairWood;
const perTabkleWood = 10; 
const talbeNeed = tableQuentity * perTabkleWood;
const perBedWood = 50; 
const bedNeed = bedQuentity * perBedWood;
const sum = chairNeed + talbeNeed + bedNeed;
return sum;
}

const myNeed = woodCount(6, 4, 2);
console.log(myNeed) */

function woodCount(chairQuantity, tableQuentity, bedQuentity){
    let perChairWood=3;
    let chiarWood = perChairWood * chairQuantity;
    let perTableWood = 10;
    let tableWood = perTableWood * tableQuentity;
    let perbedWood = 50;
    let bedWood = perbedWood * bedQuentity;
    const sum = chiarWood + tableWood + bedWood;
    return sum;
}

let totalWoodNeeded = woodCount(12, 2, 2);
console.log(totalWoodNeeded)