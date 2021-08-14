var student1 = {
    id:115,
    name:"Rakib",
    marks:82,
    phone:023434,
    subject: "Science"
}
var mobile = {
    color:"black",
    price:1900,
    screenSize:5,
    battery:"litheim battery",
    storage:"16gb"
}

var book = {
    title:"Start with why",
    author: "Simon Sinek",
    price:200, 
    pages:246,
    publisher:"penguin"
}
// console.log(book)
// console.log(book.author)
var bookPrice = book.price;
// console.log(bookPrice)

// set a object propety value 3 different way 1
book.price = 100;
// alternative of set a object 2
var priceProperty ="price"
book["price"] =300;
// way 3
book[priceProperty] = 500;
console.log(book)