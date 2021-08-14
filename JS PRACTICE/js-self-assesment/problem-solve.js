// 1 conversion 
 

/* function fettToInch(feet){
 let count = feet * 12;
 return count;
}

const howManyFeet= fettToInch(5);
console.log(howManyFeet); */

// 2 conversion 

/* function centiemeterToMeter(centi){
    const count = centi/100;
    return count;
}

const givenCenti= centiemeterToMeter(800);
console.log(givenCenti) */

// 3. calculation 

/* function pageRequirements(book1, book2, book3){
    const perBookPageBook1 = 100;
    const perBookPageBook2 =200;
    const perBookPageBook3 = 300;

    const totalPageNeedBook1 = book1 * perBookPageBook1;
    const totalPageNeedBook2 = book2 * perBookPageBook2;
    const totalPageNeedBook3 = book3 * perBookPageBook3;

    const sum = totalPageNeedBook1 + totalPageNeedBook2 + totalPageNeedBook3;

    return sum;
}

const numberOfBooks = pageRequirements(3, 2, 1);
console.log(numberOfBooks) */

// 4 get biggest string in a fuction  

/* let friendsList = ["Imon", "Sazib Khan", "Taimur Rahman", "Alauddin", "Tipu"]

function bestFried(longest){
    let friends= longest;
 for(const friend of friends){
    let frinedsArr = friend
    if(frinedsArr.length > friends.length)
    friends = frinedsArr
 }
 return friends
}

const longestFriend = bestFried(friendsList)
console.log(longestFriend) */

// 5. stop loof if the array has any negative number 

const randomArray = [12, 3, 44, 22, -64, 6, 65, 2, 34, 4];

function onlyPosetive(stoploof){
let myArray= []
for(const random of stoploof){
        let getPostive = random;
        if(getPostive < 0){
            break;    
        }
        myArray.push(getPostive);
    }
    return myArray
}
const positivesNumbers = onlyPosetive(randomArray)
console.log(positivesNumbers)

