export const cart = [{
  id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
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
