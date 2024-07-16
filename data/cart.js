export let cart = [{
  id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  Quantity: 4
},{
  id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  Quantity: 4
}];

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
        Quantity : 1
      });
    }
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(productId !== cartItem.id){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
}

