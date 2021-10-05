const displayLocalStorageCart =()=>{
const cart =getCart();
for(const name in cart){
    displayProduct(name)
}

}


const addItem  = () =>{
    const nameField = document.getElementById('product-name')
    const  name = nameField.value;
    if(!name){
        return
    }
    // display int the UI 
     displayProduct(name)

    // add to local storage 
    addProductToCart(name)
    
    

    nameField.value ='';
}

const displayProduct = data =>{
 const ul  = document.getElementById('products')
 const li = document.createElement('li')
 li.innerText = data;
 ul.appendChild(li)

}

const getCart =()=>{
  const cart = localStorage.getItem('cart')
  let cartObj;
  if(cart){
      cartObj = JSON.parse(cart);
  } else{
      cartObj = {}
  }
  return cartObj
}

const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    console.log(cart)
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
const placeOrder = ()=>{
    document.getElementById('products').textContent ='';
    localStorage.removeItem('cart')
}

displayLocalStorageCart();

// you can sent cookie to server but local storage and seciton storage will be alwasy in browser 