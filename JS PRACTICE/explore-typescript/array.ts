
const salary:number = 7500;
const friendsSalaries:number[] = [7500, 1200, 2333, 2213, 3333]
const friends:string[] = ['Sofik', 'Rakib', "Sujon"]

friendsSalaries [0] = 10500;

friendsSalaries.push(13100);
// friendsSalaries[4] = '8888'
// friendsSalaries.push('Rakib') 

let max = 0;

for(const salray of friendsSalaries){
    if(salray > max){
        max = salray;
    }
}