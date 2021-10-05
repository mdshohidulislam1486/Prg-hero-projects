const showLocalStorage =()=>{
const cart = getCart()
for(const product in cart){
    displayItem(product)
}
}

const addItem=()=>{
    const inputField = document.getElementById('product-name');
    const name = inputField.value; 
    if(!name){
        return
    }

    inputField.value ='';

    //display item 
    displayItem(name)

    // add to local storage
    addTolocal(name)

} 

const displayItem=name=>{
    const ul = document.getElementById('products');
    const li = document.createElement('li');
   
        li.innerText = name;
    

    ul.appendChild(li)
}

const getCart =()=>{
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    } else{
        cartObj ={};
    }
    return cartObj;
}


 const addTolocal =name=>{
    const cart= getCart()
    if(cart[name]){
        cart[name] +=  1 ;
    } else{
        cart[name] = 1
    }
        
    

    const cartStringified = JSON.stringify(cart)

    localStorage.setItem('cart', cartStringified)
} 

const cartCehckout=()=>{
    const products = document.getElementById('products').textContent= '';
    const clearLocal = localStorage.removeItem("cart")
}

showLocalStorage()