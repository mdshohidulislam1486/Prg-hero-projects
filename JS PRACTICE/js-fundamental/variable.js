// parseFloat();
// parseInt();
// Array 
// var FriendsAge = [33,22, 34, 23, 19, 25, 26];
var friendName = ["atiq", "iqbal", "sumon", "Tanbir"];

var friendsCount =friendName.length
// console.log(friendsCount)
var bookPages = ["Karim", "Rabbi", "Shihab", "Nadim"];

var bookIndex = bookPages.indexOf("Rabbi");
// console.log(bookIndex);

// who is int eh second posiiotn 
var positionBook = bookPages[3]

// console.log(positionBook)
bookPages[3] ="Lavlu"

// console.log(bookPages)
// add elements to an array 
var lastBench = ["kalam", "balam", "Salam"];
lastBench.push("Jalam")
lastBench.push("Palam")
// console.log(lastBench);

// remove leement from an array 

var lastBenches = ["Imam", "rimon", "Salam"];
lastBenches.pop();


//  every time you pop last element will be remove 


 var lastItem = lastBenches.pop();
//  console.log(lastBenches)
//  console.log(lastItem)

// javascript remove items from the beginning 
// javascript array add element in the beginning 

// Comparaison 

// console.log(5>6)
// console.log(5<6)
// console.log(6 == 6)
// console.log(5 != 6);

// conditional variable 
//  var isFoodReady =false;
// if (isFoodReay == true){
//     console.log("I am ready to eat ")
// } else{
//     console.log("I will eat after finishing my food")
// }

var iphonePrice =20000;
var budget = 10000;
if (budget > iphonePrice){
    // console.log("The price is under range")
}else{
    // console.log("overpriced")
}

// multiple condition 

var gotJob =true;
var moneySaved = 150000;
var hasFlat= true;

// if(gotJob =true && moneySaved >149000){
//     console.log("we can get married")
// } else{
//     console.log("We need to wait more")
// }


// if(gotJob =true && moneySaved >200000 && hasFlat ==true){
//     console.log("we can get married")
// } else{
//     console.log("We need to wait more")
// }



// if((gotJob = true && moneySaved >200000) ||  hasFlat ==true){
//     console.log("we can get married")
// } else{
//     console.log("We need to wait more")
// }


// nested conditions 


var palinRice = 20;
var chickenRice =50;
var kacchi= 70;
var packedWell =true;
var myBudget = 80; // yoiu can change the budge to see the different resutl 

// if (kacchi < myBudget  ){
//     console.log(" I like kacchi the most")
// } else if (chickenRice< myBudget){
//     console.log("I can eat chicke biriny now")
// } else {
//  console.log(" Plain rice is the heart of Bengali")
// }

// Nested conditions 

if (kacchi < myBudget){
    if(packedWell == true){
        console.log("It's okay to eat")
    } else{
        console.log("It is not packed well ")
    }
}
// javascript comparison operator home work 