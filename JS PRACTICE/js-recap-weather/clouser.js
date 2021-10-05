// you can only make one return form js funciton, my differ for condions 

/* const bank = owner =>{
balance = 0;

return amount =>{
    balance += amount;
    return balance
 }
 
} */


/* const alAminBank = bank('Mofij');

console.log(alAminBank(100));
console.log(alAminBank(300));
console.log(alAminBank(200));
// you can not call balance 
console.log(alAminBank.balance) 
console.log(alAminBank(200));
const bank = owner =>{
balance = 0; */

const bank = owner =>{
    balance = 0;
return {
    deposit:amount =>{
        balance += amount;
        return balance
     },
     withdraw:amount =>{
        balance -= amount;
        return balance
     }
}
}


const alAminBank = bank('Mofij');

console.log(alAminBank.deposit(100));
console.log(alAminBank.deposit(300));
console.log(alAminBank.deposit(200));
console.log(alAminBank.deposit(200));


console.log(alAminBank.withdraw(100));
console.log(alAminBank.withdraw(300));


// execution context javascript find on youtube 
// for clouser you can not know the onwen and will not be able to change ayy property form the clouser form out side 