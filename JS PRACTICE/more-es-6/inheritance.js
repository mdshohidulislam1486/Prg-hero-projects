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

class TeamMember{
    name;
    
    address ="BD";
    constructor(name, address){
        this.name = name;
        this.address = address
    }
}

class StudentCare extends TeamMember {
    designation="Student Care";
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    buildRoutine(student){

    console.log(this.name, 'Build a routine for', student)
    }
}

class Naptune extends TeamMember {
    designation="Naptune developer";
    codeEditor;
   
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){

    console.log(this.name, 'release app version', version)
    }
}






const amir  = new StudentCare('Amir Khan', 'BD', 4)
const salman = new Support("Salman Khan", 'Duai', 5);
const aksay  = new Naptune('Aksay Kumar', "India", "codeEditor" )
const debgan = new Support('Ajay Devgun', "Delli", 9)

const alia = new StudentCare('Alia Bhatt', "Mumbi", 12);
aksay.releaseApp('1.52.3')
console.log(amir)
// console.log(aksay)