export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  Quantity: 4,
  deliveryOptionId : '1'
},{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  Quantity: 4,
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

    if(matchedItem){
       matchedItem.Quantity++;
    }
    else{
      cart.push({
        id : checkingIdd,
        Quantity : 1,
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