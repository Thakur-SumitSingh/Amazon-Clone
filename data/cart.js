export const cart = [];

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