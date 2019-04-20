var addToCartForm = document.querySelector(".add-to-cart-form");
var overlay = document.querySelector(".overlay");
var productSnippetBtn = document.querySelectorAll(".product-snippet__button");


for (var i=0; i<productSnippetBtn.length; i++){
  productSnippetBtn[i].addEventListener("click", function(evt) {
    addToCartForm.classList.add("add-to-cart-form--open");
    overlay.classList.add("overlay--open");
  });
}

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
