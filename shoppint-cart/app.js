
function caseTotal(product, price, isIncreasing){
    const inputValueText = document.getElementById( product + '-number')
    let inputValueInner = inputValueText.value; 

    if(isIncreasing == true){
        inputValueInner = parseInt(inputValueInner) + 1;
    } else if(isIncreasing == false && inputValueInner > 0 ){
        inputValueInner = parseInt(inputValueInner) - 1;
    }
    inputValueText.value =inputValueInner
    const caseInput = document.getElementById(product +'-total')
    caseNumber = parseInt(caseInput.innerText)
    caseInput.innerText = inputValueInner * price;
}

// phone 
document.getElementById('phone-plus').addEventListener('click', function(){
    caseTotal("phone",1229, true)

})

document.getElementById('phone-minus').addEventListener('click', function(){
    caseTotal("phone",1229, false)
})

// case 
document.getElementById('case-plus').addEventListener('click', function(){
    caseTotal("case", 59, true)
})

document.getElementById('minus-input').addEventListener('click', function(){
    caseTotal("case", 59, false)
    
})

