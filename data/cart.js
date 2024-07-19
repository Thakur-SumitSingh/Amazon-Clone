export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  Quantity: 1,
  deliveryOptionId : '1'
},{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  Quantity: 1,
  deliveryOptionId : '2'
}];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(checkingIdd){
  let matchedItem;
    cart.forEach((cartItem) =>{
      if(checkingIdd === cartItem.id){
        matchedItem = cartItem;
      }
    });

     const quantitySelector = document.querySelector(`.js-drop-down${checkingIdd}`);
     const quantity = Number(quantitySelector.value);

    selecty(checkingIdd);

    if(matchedItem){
       matchedItem.Quantity += quantity;
    }
    else{
      cart.push({
        id : checkingIdd,
        Quantity : quantity,
        deliveryOptionId : '1'
      });
    }

    saveToStorage();
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(productId !== cartItem.id){
      newCart.push(cartItem);
    }
  });
  cart=newCart;

  saveToStorage();
}

export function updateDeliveryOption (productId,deliveryOptionId) {
  let matchedItem;
  cart.forEach((cartItem) =>{
    if(productId === cartItem.id){
      matchedItem = cartItem;
    }
  });

  matchedItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}

let timeoutId;
function selecty (checkingIdd){
  const added = document.querySelector(`.js-${checkingIdd}`);

   if (added) { // Check if the element exists
    added.classList.add('added-to-cart-after');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
   added.classList.remove('added-to-cart-after');
  },2000);
 }
}