

const Kibria = {
    id:101,
    money:5000,
    name:'RJ Kibria',
   
    treatDey: function(expense, tips, tax){
        this.money = this.money - expense- tips -tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 5000, 
    name: 'Hero Balam'
}

const normalGolam = {
    id: 103,
    money: 8000, 
    name: 'Normal Balam'
}
//**********************
// Kibria.treatDey.call(heroBalam, 300, 200, 50)
// Kibria.treatDey.call(heroBalam, 200)
 /* use git bash to see all console  */


//**********************
// you can use this line multiple time with different value
 Kibria.treatDey.apply(heroBalam,[500, 100, 50])