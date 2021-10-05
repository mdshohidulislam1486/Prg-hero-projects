
function add(first, second){
    const result = first + second
    return result;
}

const sum  = add(5, 7)
// console.log(fist) or console.log(result) both will be undefined both is only for local scope

// local can not use globally but global can be used in both local and globally 

function add(first, second){
    const result = first + second
    if(result > 9){
        const mood = 'happy'
        //this will work fine 
        console.log(mood) 
    }
    return result;
    console.log(mood)
    // this will be undefiend 
}

// if you use second backet let and const variable will be undefined out of that backet 
//  but if you use var they will work fine and can be use globally,  by hoisting it will take your variable even before the declered variable but the value will be undefiend before lines declearing the value 

// if you decler a variable anywere without let, const or var it will work as a var alwasy 

 
for(let i=0; i < 10; i++){
    
}
// console.log(i) it will  erro it prefered method 

for(var i=0; i < 10; i++){
    
}
// console.log(i) result will be 10 not prefered as the result will be every werer 