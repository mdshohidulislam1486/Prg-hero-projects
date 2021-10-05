
const Kibria = {
    id:101,
    money:5000,
    name:'RJ Kibria',
   
    treatDey: function(expense){
        this.money = this.money - expense;
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

// Kibria.treatDey(500)

// you can use one object method with another object thorought bind 
const heorTreatDey = Kibria.treatDey.bind(heroBalam)

const normaTreatDey = Kibria.treatDey.bind(normalGolam)


normaTreatDey(500)
normaTreatDey(1000)
heorTreatDey(500)
heorTreatDey(300)
heorTreatDey(200)
Kibria.treatDey(400)
