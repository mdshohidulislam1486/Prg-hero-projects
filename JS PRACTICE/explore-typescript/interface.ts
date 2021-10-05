
interface Player {
    name:string,
    club:string,
    salary:number,
    country?:string,
    previousClub?:string
}

const messy: Player={
    name:"Messy",
    club:"PSG",
    salary:12000,
    country:'Argentina',
    previousClub:'Barcelona'
}

const cr7: Player ={
    name:'Cristino Ronaldo',
    club:'Real Madrid',
    salary:20000
}

interface Employee {
    name:string,
    desgination:string,
    salary:number,
    age:number
}

interface Developer extends Employee{
    language:string,
    codeEditor:string,
    typingSpeed:number
}

const zuku: Developer={
name:'Zukarberg',
salary:2222,
age:23,
desgination:'faceBooker',
language:'javaScript',
codeEditor:'Vs code',
typingSpeed:200
}

