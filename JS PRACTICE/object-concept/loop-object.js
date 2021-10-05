
const bottle = {color:"yellow", hold:'water', price:50, isClined:true};

/* 
1. for(let i=0; i<10; i++){}
2. for(const num of numbers){}, use for "array"(important), array like object(get elements by class etc), arguments object
3. for(const prop in students){} this use for "object" (this use for ojbject because it does not give gurantee of right ordr )
*/

for(const prop in bottle){
    // console.log(prop, bottle[prop]); /* you can also get it by bootle.pop */
}

const keys = Object.keys(bottle)
// console.log(keys)
for(const prop of keys){
    // console.log(prop, bottle[prop]);
}


const entries = Object.entries(bottle);
// console.log(entries)
// advanced
for(const [key, value] of Object.entries(bottle)){
console.log(key, value)
}
