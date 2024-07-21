import {cart} from "../data/cart.js";

function displayCartQuantity(){
  let cartQuantity = 0;
 cart.forEach((cartItem) => {
 cartQuantity += cartItem.Quantity;
   });
   document.querySelector('.cart-number').innerHTML = cartQuantity;
}
displayCartQuantity();
