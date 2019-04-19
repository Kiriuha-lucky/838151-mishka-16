// var write = document.querySelector(".button-contacts");
// var popup = document.querySelector(".modal-write-us");
// var close = popup.querySelector(".modal-map-close");
//
// var login = popup.querySelector("[name=name-surname]");
// var email = popup.querySelector("[name=e-mail]");
// var message = popup.querySelector("[name=write-us-text]");
//
// write.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
//   login.focus();
// });
//
// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
//   popup.classList.remove("modal-error");
// });
//
// popup.addEventListener("submit", function(evt) {
//   if (!login.value || !email.value || !message.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//     console.log("Нужно ввести логин и пароль");
//   }
// });
//
// window.addEventListener("keydown", function(evt) {
//
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (popup.classList.contains("modal-show")) {
//       popup.classList.remove("modal-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });
//
// var mapLink = document.querySelector(".map-image");
// var mapPopup = document.querySelector(".modal-map");
// var mapClose = mapPopup.querySelector(".modal-map-close");
//
// mapLink.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   mapPopup.classList.add("modal-show");
//
// });
//
// mapClose.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   mapPopup.classList.remove("modal-show");
// });
//
// window.addEventListener("keydown", function(evt) {
//
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (mapPopup.classList.contains("modal-show")) {
//       mapPopup.classList.remove("modal-show");
//     }
//   }
// });
var toggle = document.querySelector(".page-header__nav-toggle");
var menu = document.querySelector(".page-header__nav-list");

menu.classList.add("page-header__nav-list--close");
toggle.classList.add("page-header__nav-toggle--open");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(menu.classList.contains('page-header__nav-list--close')) {
    menu.classList.remove("page-header__nav-list--close");
    menu.classList.add("page-header__nav-list--open");
    toggle.classList.remove("page-header__nav-toggle--open");
    toggle.classList.add("page-header__nav-toggle--close");
  } else {
  menu.classList.remove("page-header__nav-list--open");
  menu.classList.add("page-header__nav-list--close");
  toggle.classList.remove("page-header__nav-toggle--close");
  toggle.classList.add("page-header__nav-toggle--open");
}
});

console.log("Всем првиет");
