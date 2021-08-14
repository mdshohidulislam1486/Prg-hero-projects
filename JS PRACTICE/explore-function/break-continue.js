// var i =0;
// while (i <10){
//     console.log(i);
//     if(i==5){
//      break;   
//     }
//     i++;
// }

// for (i=0; i<20; i++){
//     console.log(i);
//     if (i == 10){
//         break
//     }
// }

// loof will stop if get a number more than 90 remember not equal 
/* var numbers = [23, 64, 33, 87, 101, 98, 33, 22, 99, 122]
for ( var i=0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number > 90){
        break;
    }
}
 */

// this continue will remove all number more than 90 
/* for (var i=0; i< numbers.length; i++ ){
    var number = numbers[i];
    if(number > 90){
        continue
    }
    console.log(number)
} */

// var numbers = [23, 64, 33, 87, 101, 98, 33, 22, 99, 122];
// for(let i=0; i < numbers.length; i++){
//     var number = numbers[i]
//     console.log(number)
//     if(number > 90 ){
//         break;
//     }
// }


/* var numbers = [23, 64, 33, 87, 101, 98, 33, 22, 99, 122];
for(let i=0; i<numbers.length; i++){
    number = numbers[i];

    if(number%2 == 1){
    
    console.log(number)
    }
} */

/* function oddNumber(num){
    let number = [];
    
    for(let i=0; i<num.length; i++){
        const evenNumber = num[i];
     if(evenNumber % 2 != 1){
      number.push(evenNumber);
     } 
    }
    return number;
}

var numbers = [23, 64, 33, 87, 101, 98, 33, 22, 99, 122]
var evenNumber = oddNumber(numbers);
console.log(evenNumber) */

var numbers = [23, 64, 33, 87, 101, 98, 33, 22, 99, 122]
for(let i=0; i<numbers.length; i++){
    var number = numbers[i]
    if(number > 90){
        continue
    }
    console.log(number)
}



