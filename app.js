// FIXED NAV BAR //

let fixednav = document.querySelector(".fix-nav");
let nav = document.querySelector(".nav-container");
let scroll = document.querySelector(".scroll-container");

window.addEventListener("scroll", function () {
  let navheight = nav.getBoundingClientRect().height;
  let scrollheight = window.pageYOffset;

  if (navheight < scrollheight) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }

  // FIXED NAV BAR ENDS //

  // SCROLL BUTTON APPREARS //

  if (scrollheight > 950) {
    scroll.classList.add("show-link");
  } else {
    scroll.classList.remove("show-link");
  }
});

// SCROLL BUTTON APPEARS ENDS //

// YEAR IN FOOTER //

let date = document.querySelector(".date");

let year = new Date().getFullYear();

date.textContent = `${year}`;

// YEAR IN FOOTER ENDS //

// MOBILE NAVIGATION BAR//
let bar = document.querySelector(".nav-bar");
let exit = document.querySelector(".exit");
let mobile = document.querySelector(".mobiletabs-section");
let tabs = document.querySelectorAll(".mobile-tabs");

bar.addEventListener("click", function () {
  mobile.classList.add("show-navigation");
});

exit.addEventListener("click", function () {
  mobile.classList.remove("show-navigation");
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    mobile.classList.remove("show-navigation");
  });
});

// MOBILE NAVIGATION BAR ENDS//

// LINK RESET//

function resetHref() {
  location.hash = "";
}

// LINK RESET ENDS//
