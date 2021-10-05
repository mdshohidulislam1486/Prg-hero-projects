//1 using object literal 
const students ={name:'sakib', age:23}


//2 object constractor 

const person = new Object()
// console.log(person)

//3 this will inherit form 

// const human = Object.create(null);
const human = Object.create(students);
// console.log(human.age)


class People {
    constructor(name, age){
        this.name =name
        this.age = age
    }
}  

const ppl = new People('Manus', 12)
// console.log(ppl)

//4 Syntactic Sugar
// this function are used as class constructor before
function Manus(name){
    this.name =name;
}

const man  = new Manus("Kader")
// console.log(man)