
function seerToMon(seer){

    // verifying the input, if it is a positive numeric
    if(typeof seer != "number"){
    return "Enter a valid number please!";
    } else if( seer < 0){
    return "Please enter a positive number";
    }
    
    const perMon = 40;
    const numberOfMon = seer / perMon;
    return numberOfMon;
    } 
    
    const getMon = seerToMon(40);
    console.log(getMon) 
    
    
    function totalSales(shirt, pant, shoe){
    
    if( shirt, pant, shoe < 0 && typeof shirt, pant, shoe != "number"){
        return "Please enter the number of product you have sold"
    }
        const perShirtPrice = 100;
        const perPantPrice = 200;
        const perShoePrice = 500;
    
        const shirtTotalPrice = perShirtPrice * shirt;
        const pantTotalPrice = perPantPrice * pant;
        const shoeTotalPrice = perShoePrice * shoe;
     
        const totalProductSales = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
        return totalProductSales;
    }
    
    const getTSales = totalSales(5, 1, 1);
    console.log(getTSales)
    
      function deliveryCost(productDelivered){
        
        if(typeof productDelivered != "number"){
            return "You have not said how many product have you delivered"
        } else if( productDelivered < 0 ){
            return "Error found!!! It can not be a negative nubmer"
        }
            const first100Charge = 100;
            const second100Charge = 80; 
            const moreThan200Charge = 50;
    
        if(productDelivered <= 100 ){
            const first100TotalCost = productDelivered * first100Charge;
            return first100TotalCost;
    
        } else if (productDelivered <= 200){
            const first100 = 100  * first100Charge;
            const remainAfter100 = productDelivered - 100;
            const second100 = remainAfter100 * second100Charge;
            const totalDelivered = first100 + second100;
            return totalDelivered;
        } else {
            const first100 = 100  * first100Charge;
            const second100 = 100 * second100Charge;
            const remainingDelivary = productDelivered - 200;
            const after200 = remainingDelivary * moreThan200Charge;
            const totalDelivered = first100 + second100 + after200;
            return totalDelivered;
        }
    } 
    
    
    
    const friends = ["Sonjib Das", "Naeem Khan", "Sahadat", "Sobur", "Shakil", "Dejan", "Imran"]
    
    function perfectFriend(friendList){
    
    if(!Array.isArray(friendList)){
        return "You have to enter an valid array to get the out put"
    }
    
    const firstNameWith5Digit =[]
    for(const friend of friendList){
        if(friend.length == 5){
        firstNameWith5Digit.push(friend)
        break;
        }
      }
        return firstNameWith5Digit;
    }
    