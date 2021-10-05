

function stopWatch() {
    let counter = 0;

    // you cna write this funciton outside too 
    return function(){
        counter++;
        return counter;
    }
}
  
let clock1 = stopWatch();
console.log(clock1())
console.log(clock1())

let clock2 = stopWatch();
let clock3 = stopWatch();

// for every call it will make an internal reference and will reconginize clock1 clock2 and clock3 accordingly 

// whta is closure and why use closer in javascript 