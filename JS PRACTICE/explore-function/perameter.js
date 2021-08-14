// function bringTheConsle(remain){
//     console.log("I know ", remain);
// }

// bringTheConsle("this is fowl")
// var money =2500;
// bringTheConsle(money)


function bringTheConsle(remain){
    console.log("I know ", remain);
    var actualPrice =10;
    var actualQuentity= remain/actualPrice;
    return actualQuentity;
}



var money =250;
 var remainCosnsole  =bringTheConsle(money);
 console.log("This is the", remainCosnsole)