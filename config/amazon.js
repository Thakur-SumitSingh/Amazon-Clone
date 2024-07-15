import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

let display_data = '';
products.forEach((product) => {
  display_data += `<div class="product-container">
      <div class="product-image-container">
        <img src="${product.image}" class="image1">
      </div>
      <div class="product-name">
       ${product.name}
      </div>
      <div class="flexbox1">
        <div>
          <img src="images/ratings/rating-${product.rating.stars * 10}.png" class="rating-image">
        </div>
        <div class="rating-number">${product.rating.count}</div>
      </div>
      <div class="money-box">
        <p>&#x20B9;${product.priceCents}</p>
      </div>
      <div>
        <select class="drop-down">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>
      <div class="added-to-cart">
        <img src="images/checkmark.png">
        Added
      </div>
      <div class="button-div">
        <button class="button js-button" data-product-id="${product.id}"> Add to Cart</button>
      </div>
    </div>`
});
document.querySelector('.js-grid').innerHTML = display_data;

function displayCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
  cartQuantity += cartItem.Quantity;
    });
    document.querySelector('.cart-number').innerHTML = cartQuantity;
  console.log(cart);
}

document.querySelectorAll('.js-button').forEach((button) => {
  button.addEventListener('click', ()=> {
   const checkingId = button.dataset.productId;
   addToCart(checkingId);
   displayCartQuantity();
  });
});