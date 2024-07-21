import {cart} from "../../data/cart.js";
import {getProduct} from "../../data/products.js";
import {getDeliveryOption} from "../../data/deliveryOption.js";


export function renderPaymentSummary(){
 let productPrice = 0;
 let ShippingPrice =0;

 cart.forEach((cartItem) => {
  const product = getProduct(cartItem.id);
  productPrice += product.priceCents * cartItem.Quantity;
  
  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  ShippingPrice += deliveryOption.price;
 });

 const totalBeforeTax = productPrice + ShippingPrice;
 const taxRupee = Math.round(totalBeforeTax * 0.1);
   const total = totalBeforeTax + taxRupee;

 
 const paymentSummaryHTML = `
  <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">&#x20B9;${productPrice}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">&#x20B9;${ShippingPrice}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">&#x20B9;${totalBeforeTax}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">&#x20B9;${taxRupee}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">&#x20B9;${total}</div>
      </div>
      <div class="button-div">
      <a href="orders.html">
      <button class="place-order-button button-primary">
        Place your order
      </button>
      </a>
      </div>
 `;
 document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}

// function i made for oredrs page
export function moneyCall (){
  let productPrice = 0;
 let ShippingPrice =0;

 cart.forEach((cartItem) => {
  const product = getProduct(cartItem.id);
  productPrice += product.priceCents * cartItem.Quantity;
  
  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  ShippingPrice += deliveryOption.price;
 });

 const totalBeforeTax = productPrice + ShippingPrice;
 const taxRupee = Math.round(totalBeforeTax * 0.1);
 const total = totalBeforeTax + taxRupee;
  return total;
}