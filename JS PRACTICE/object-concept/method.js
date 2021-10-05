
const student = {
    id:101,
    balance:5000,
    name:'RJ Kibria',
    major: 'Mathematics',
    isRich: false,
    subjects:['English', 'Economics', 'Math 101', 'Calculus'],
    bestFriend:{
        name:'Kundu',
        major:'Mathematics'
    },
    takeExam: function(){
        console.log( this.name, 'Taking Exam')
    },
    treatDey: function(expense, tips){
        this.balance = this.balance - expense  - tips
        return this.balance
    }
}


student.takeExam();
const reamaining1 = student.treatDey(900, 100);
const reamaining2 = student.treatDey(500, 50);
console.log(reamaining1)
console.log(reamaining2)
