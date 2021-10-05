

/* let money = 500;
let how = 'Honey'
let knoy = false */

let money:number = 5;
let str:string = 'This is a string';




function add1(first:number, second:number): number{
    const reslt = first + second;
    return reslt;
}

const output:number = add(23, 22)


// use void if you don't want to reuturn from function 
function doubleConsole (number:number):void{
    console.log(2* number)
}

//  multi  purpose 

/* function add(first:number | string, second:number |string): number | string{
    const reslt:string | number = first + second;
    return reslt;
}

const output:number = add(23, 22);
const fullName = add('Akhon', "Ashik")
 */