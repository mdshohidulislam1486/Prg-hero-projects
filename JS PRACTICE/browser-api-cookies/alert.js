// alert('abc')




const rainComing=()=>{
    alert('Rain is coming')

}

const isGoing=()=>{
    const response = confirm("Are you going to picnic")
    console.log(response)

    if(response === true){
        alert('You took a good decision');
    } else{
        alert('You have to pay for this')
    }
}

const askName = ()=>{
    const name = prompt('What is your name');
    if(name){
        console.log(name)
    }

}