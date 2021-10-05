

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const getDepositBanalce = document.getElementById('deposit-total');
    const depositBalanceText= getDepositBanalce.innerText;
    const depositBalance = parseFloat(depositBalanceText)
})