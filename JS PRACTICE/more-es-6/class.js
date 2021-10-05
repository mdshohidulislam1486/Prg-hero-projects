// it is called template or shape that reshape all the object 

class Support {
    name;
    designation ='Support Web Dev';
    address ='Bangladesh'
    constructor(name, address){
        this.name = name;
        this.address =address;
    }
    // you cna write a funciton inside class but you dont need to write funciton before 
    startSession (){
        console.log(this.name, 'start a support session')
    };
}

const amir  = new Support('Amir Khan', 'BD')
const salman = new Support("Salman Khan", 'Dubai')
// console.log(amir)
// console.log(salman)

 amir.startSession();
 salman.startSession();