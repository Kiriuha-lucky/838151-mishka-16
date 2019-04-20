var toggleMenuBtn = document.querySelector(".page-header__nav-toggle");
var menu = document.querySelector(".page-header__nav-list");

menu.classList.add("page-header__nav-list--close");
toggleMenuBtn.classList.add("page-header__nav-toggle--open");

toggleMenuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('page-header__nav-list--close')) {
    menu.classList.remove("page-header__nav-list--close");
    menu.classList.add("page-header__nav-list--open");
    toggleMenuBtn.classList.remove("page-header__nav-toggle--open");
    toggleMenuBtn.classList.add("page-header__nav-toggle--close");
  } else {
    menu.classList.remove("page-header__nav-list--open");
    menu.classList.add("page-header__nav-list--close");
    toggleMenuBtn.classList.remove("page-header__nav-toggle--close");
    toggleMenuBtn.classList.add("page-header__nav-toggle--open");
  }
});
