import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
 import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
 import {deliveryOption} from '../data/deliveryOption.js';


let cartItemHtml = '';
cart.forEach((item) => {
const productId = item.id;

let matchingProduct;
products.forEach((productItem) => {
  if(productItem.id === productId){
    matchingProduct = productItem;
  }
});

 const deliveryOptionId = item.deliveryOptionId;
 let delivery; //taken this name becz of name conflict
 deliveryOption.forEach((option) => {
if(deliveryOptionId === option.id){
    delivery = option;
  }
 });

const today = dayjs();
    const deliveryDate = today.add(delivery.deliveryDays,'days');
  const dateString = deliveryDate.format('dddd, MMMM D');

cartItemHtml += `
    <div class="cart-item-container js-cart-item-container-${productId}">
            <div class="delivery-date">
               Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  &#x20B9;${matchingProduct.priceCents}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.Quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary "data-delete-button-id ="${productId}">
                    Delete
                  </span>
                </div>
              </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              ${deliveryOptionHtml(productId,item)}
            </div>
          </div>
        </div> `;
});

function deliveryOptionHtml (productId,item){
  let html = '';
  deliveryOption.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');

    const priceString = deliveryOption.price === 0 ? 'FREE' : `&#x20B9;${deliveryOption.price} -`;

    const isChecked = deliveryOption.id === item.deliveryOptionId;

   html += `<div class="delivery-option">
      <input type="radio" ${isChecked ? 'checked': ''}
        class="delivery-option-input"
        name="delivery-option-${productId}">
      <div>
        <div class="delivery-option-date">
          ${deliveryDate.format('dddd, MMMM, D')}
        </div>
        <div class="delivery-option-price">
        ${priceString} Shipping
        </div>
      </div>
     </div>`;
  });

  return html;
}

document.querySelector('.js-order-summary').innerHTML = cartItemHtml;

document.querySelectorAll('.delete-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    const deleteId = link.dataset.deleteButtonId;
    removeFromCart(deleteId);

    document.querySelector(`.js-cart-item-container-${deleteId}`).remove();
  });
});
