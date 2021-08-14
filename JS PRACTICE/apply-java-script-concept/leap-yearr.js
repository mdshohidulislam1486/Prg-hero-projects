/* function leapYear(year){
 if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
     return true;
 } 
 return false;
}

var testYear = 2100; 
var testLeapYear = leapYear(testYear)
console.log(testLeapYear) */

function leapYear(year){
    if(year%4 == 0 && year% 100 !=0 || year%400 ==0){
        return true;
    }
    return false;
}

var testYear = leapYear(2200);
console.log(testYear)
