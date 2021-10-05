 const fish ={
     name:"king Hilsha",
     id: 58,
     price: 900,
     phone: '93309473209472', 
     address:"Chandpur",
     dress: 'silver'
 }

/*  const phone = fish.phone;
 const price = fish.price;
 const dress = fish.dress;
 const id = fish.Id */

//  shortcut for getting object property

/* const {phone,price,dress,id} = fish;
console.log(phone, price)
console.log (phone, dress)
console.log(phone, id) */


const compnay = {
    name:'GP',
    ceo:{id:1, name:'ajmol', food:"fuchka"},
     web:{work:'website development', employee:22, framework: 'react'}
    }

/*     const ceoName  = compnay.ceo.name;
    const work = company.web.work; */

    // shortcut for complex object 

    const {work, framework} =compnay.web;
    const {food, id} =compnay.ceo;

    console.log(work, framework, food)