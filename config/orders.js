import {cart} from "../data/cart.js";
import {products} from "../data/products.js";
import {moneyCall} from './checkout/paymentSummary.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOption} from "../data/deliveryOption.js";

displayCartQuantity();
const total = moneyCall();
let header = `<div class="header-left-side">
          <div class="header-left-inside-box1">
            <div class="header-text">Order Placed:</div>
            <div class="text1">This Week</div>
          </div>
          <div class="header-left-inside-box2">
            <div class="header-text">Total:</div>
            <div class="text1">&#x20B9; ${total}</div>
          </div>
        </div>
        <div class="header-right-side">
          <div class="header-text">Order ID:</div>
          <div class="text1">27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
        </div>`;
document.querySelector('.header-container').innerHTML = header;

let HTML ='';
cart.forEach((cartItem) => {
  let datee = date(cartItem.deliveryOptionId);
 let matchingId = generate(cartItem.id);
   HTML += `
  <div>
    <img src="${matchingId.image}" class="ordered-details-image">
  </div>
  <div class="line-alignment">
    <div class="ordered-details">${matchingId.name}</div>
    <div>Arriving on: ${datee.format('MMMM D')}</div>
    <div>Quantity: ${cartItem.Quantity}</div>
    <div class="ordered-details-button-container">
      <a href="amazon.html" class="linkk">
      <button class="ordered-details-button">
      <img src="images/buy-again.png" class="ordered-details-button-image">
      <span class="ordered-details-span">
        Buy it again</span>
    </button>
  </a>
    </div>
  </div>

  <div class="track-package-container">
    <a href="tracking.html?orderid=${cart.id}">
    <button class="track-package">
      Track package
    </button>
    </a>
  </div>
    </div>`;
});
document.querySelector('.ordered-details-grid').innerHTML = HTML;


function generate (productid) {
  let matched;
    products.forEach((productItem) => {
      if(productItem.id === productid){
        matched = productItem;
      }
    });
  return matched;
}

function date(deliveryid){
  let matched;
  deliveryOption.forEach((deliveryOption) => {
    if(deliveryid === deliveryOption.id){
      matched = deliveryOption;
    }
  });
  const today = dayjs();
  const deliveryDate = today.add(matched.deliveryDays,'days');
  return deliveryDate;
}

function displayCartQuantity(){
  let cartQuantity = 0;
 cart.forEach((cartItem) => {
 cartQuantity += cartItem.Quantity;
   });
   document.querySelector('.cart-number').innerHTML = cartQuantity;
}