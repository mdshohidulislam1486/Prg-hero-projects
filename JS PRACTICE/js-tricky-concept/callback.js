

// You can sent Array, object and string inside a funciton 
/* function welcomeMessage(name){
    console.log(name)
}

const name = 'Tom Hanks'
welcomeMessage(name)

const myarray  =[ 'Tom Hanks', 'Tom Cruse', 'Tom Brady']
welcomeMessage(myarray)

const myObject  ={name:'Tom ', age:22}
welcomeMessage(myarray)
 */

// you can sent a function as another funciotn perameter 
function welcomeMessage(name, greetHandler){
    // console.log(greetHandler)
    greetHandler(name)
}

function greetMorning(name ){
    console.log('Good Morning', name )
}

function greetAfternoon(name ){
    console.log('Good afternoon', name )
}
function greetEvening(name ){
    console.log('Good Evening', name )
}

welcomeMessage( 'Tom Hanks', greetMorning)
welcomeMessage( 'Sakib Hanks', greetAfternoon)
welcomeMessage( 'Bappa raj', greetEvening)


// What is clll back funciont if you use a function as an another funciotn pereamter 

// javascript array is an object 