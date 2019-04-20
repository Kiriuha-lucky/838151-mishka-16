var addToCartForm = document.querySelector(".add-to-cart-form");
var productCardBtn = document.querySelector(".product-card__link");
var overlay = document.querySelector(".overlay");

productCardBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCartForm.classList.add("add-to-cart-form--open");
  overlay.classList.add("overlay--open");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addToCartForm.classList.contains("add-to-cart-form--open")) {
      addToCartForm.classList.remove("add-to-cart-form--open");
      overlay.classList.remove("overlay--open");
    }
  }
});

addToCartForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    addToCartForm.offsetWidth = addToCartForm.offsetWidth;
});
