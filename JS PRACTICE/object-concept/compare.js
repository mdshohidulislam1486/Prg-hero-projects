/*const first = {a: 1};
const second = {a: 1};
const third = first;

 if( first === second){
    console.log('Object are equal')
} else{
    console.log('Object are different')
}

if( first === third){
    console.log('Object are equal')
} else{
    console.log('Object are different')
} */


//this are equal 



// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));
/* 
const first = {a: 1, b:2};
const second = {a: 1, b:2};

//this are different 
const first1 = {b: 1, a:2};
const second1 = {a: 1, b:2};
 */

/* 
if( JSON.stringify(first1) === JSON.stringify(second1)){
    // console.log('Object are equal')
} else{
    // console.log('Object are different')
}
 */



function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false
        }
    }
    return true;
}

const first = {a:1, b:2};
const second = {a: 1, b:2};


//this are different 
const first1 = {b: 2, a:1};
const second1 = {a: 1, b:2};

const isEaual = compareObjects(first1, second1)
console.log(isEaual)