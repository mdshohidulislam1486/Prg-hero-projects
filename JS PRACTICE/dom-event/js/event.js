/* const blueButton = document.getElementById('blue-button')
const greenButton = document.getElementById('make-green')
const brownButton = document.getElementById("make-brown")
const hotPink = document.getElementById("make-hotpink")


function makeRed(){
    document.body.style.backgroundColor ="red"
}
 
function makeBlue(){
    document.body.style.backgroundColor ="blue"
}

// anonymous function 
greenButton.onclick  = function(){
    document.body.style.backgroundColor ='green'
}
blueButton.onclick = makeBlue;


function makeGoldenRoad(){
    document.body.style.backgroundColor ="brown"
}
brownButton.addEventListener('click', makeGoldenRoad )

hotPink.addEventListener("click", function(){
    document.body.style.backgroundColor ="hotpink"
})

document.getElementById("make-lightblue").addEventListener("click", function(){
    document.body.style.backgroundColor= "lightblue"
})


 */
const makeBlue = document.getElementById('blue-button')



makeBlue.addEventListener('click', function(){
    document.body.style.backgroundColor= "blue"
})

function makeYellow(){
document.body.style.backgroundColor = "yellow"
}

document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = "green"
})