// PRICE ADDING FUNCTION
function itemPriceAdder(itemStartingName, price){
    let item = document.getElementById(itemStartingName+'-price');
    item.innerText = price;
};

// EVENT ADDER FUNCTION
function eventAdder(itemIdName,itemPriceOutput,value,price){
    //Accessing Normal Total Price and Final Total Price 
    let normalTotalPrice = document.getElementById('normal-total-price');
    let finalTotalPrice = document.getElementById('final-total-price');
    //Event listener part
    document.getElementById(itemIdName+'-'+value).addEventListener('click', function(){
        //Renewing normalTotalPrice
        normalTotalPrice.innerText = 1299;
        itemPriceAdder(itemPriceOutput,price);
        //Fixing normalTotalPrice
        let normalTotalPriceText = normalTotalPrice.innerText;
        const memoryFinalPrice = document.getElementById('memory-price').innerText; 
        const storageFinalPrice = document.getElementById('storage-price').innerText; 
        const deliveryFinalPrice = document.getElementById('delivery-price').innerText;
        //changing Normal Total Amount 
        normalTotalPrice.innerHTML = parseInt(normalTotalPriceText) + parseInt(memoryFinalPrice) + parseInt(storageFinalPrice) + parseInt(deliveryFinalPrice);
        //Fixing Final Total Price
        let finalTotalPriceText = finalTotalPrice.innerText;
        finalTotalPrice.innerHTML = normalTotalPrice.innerText;
    });
};

// Adding events to MEMORY
eventAdder('memory','memory','12gb',0);
eventAdder('memory','memory','16gb',180);

// Adding events to STORAGE
eventAdder('storage','storage','256gb',0);
eventAdder('storage','storage','512gb',100);
eventAdder('storage','storage','1tb',180);

// Adding events to DELIVERY CHARGE
eventAdder('delivery','delivery','normal',0);
eventAdder('delivery','delivery','fast',20);

//---------------
//PROMO CODE PART
//---------------

document.getElementById('promo-code-btn').addEventListener('click', function(){
    //Accessing Promo code, Normal Total Price and Final Total Price 
    const promoCode = document.getElementById('promo-code-input').value;
    const normalTotalPrice = document.getElementById('normal-total-price');
    const normalTotalPriceText = normalTotalPrice.innerText;
    const finalTotalPrice = document.getElementById('final-total-price');
    const finalTotalPriceText = finalTotalPrice.innerText;
    const finalTotalPriceNum = parseInt(finalTotalPriceText);
    //If else condition for validating promo code 
    if(promoCode == 'stevekaku' && finalTotalPriceNum == parseInt(normalTotalPrice.innerText)){
        finalTotalPrice.innerText = finalTotalPriceNum - (parseInt(normalTotalPriceText)/20);
    }
    else if(finalTotalPriceNum < parseInt(normalTotalPrice.innerText)){
        return;
    }
    else{
        return;
    }  
});