// window.onload = function () {
//   var hidePopup = document.querySelector(".popup");
//   document.onlick = function (e) {
//     if (e.target.class !== "popup") {
//       hidePopup.style.display = "none";
//     }
//   };
// };

if (window.matchMedia("(min-width: 1119px)").matches) {
  const button = document.querySelector(".show-hide__button");
  const hiddenItems = document.querySelectorAll(".hidden-item-desktop");
  let isHidden = true;
  button.addEventListener("click", () => {
    button.textContent = isHidden ? "Показать все" : "Скрыть";

    isHidden = !isHidden;
    hiddenItems.forEach((item) => item.classList.toggle("hidden"));
  });
} else {
  const button = document.querySelector(".show-hide__button");
  const hiddenItems = document.querySelectorAll(".hidden-item");
  let isHidden = true;
  button.addEventListener("click", () => {
    button.textContent = isHidden ? "Показать все" : "Скрыть";

    isHidden = !isHidden;
    hiddenItems.forEach((item) => item.classList.toggle("hidden"));
  });
}

if (window.matchMedia("(min-width: 1119px)").matches) {
  const button1 = document.querySelector(".show-hide__button1");
  const hiddenItems = document.querySelectorAll(".hidden-item-desktop1");
  let isHidden = true;
  button1.addEventListener("click", () => {
    button1.textContent = isHidden ? "Показать все" : "Скрыть";

    isHidden = !isHidden;
    hiddenItems.forEach((item) => item.classList.toggle("hidden-con1"));
  });
} else {
  const button1 = document.querySelector(".show-hide__button1");
  const hiddenItems = document.querySelectorAll(".hidden-item1");
  let isHidden = true;
  button1.addEventListener("click", () => {
    button1.textContent = isHidden ? "Показать все" : "Скрыть";

    isHidden = !isHidden;
    hiddenItems.forEach((item) => item.classList.toggle("hidden-con1"));
  });
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  mousewheel: true,
  keyboard: true,
});
if (window.matchMedia("(min-width: 767.98px)").matches) {
  swiper.destroy();
}

var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  mousewheel: true,
  keyboard: true,
});
if (window.matchMedia("(min-width: 767.98px)").matches) {
  swiper1.destroy();
}

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  mousewheel: true,
  keyboard: true,
});
if (window.matchMedia("(min-width: 767.98px)").matches) {
  swiper2.destroy();
}

var popup = document.querySelector(".modal-oz");
var openPopupButton = document.querySelector(".button-open-modal-oz");
var popup1 = document.querySelector(".modal-zz");
var openPopupButton1 = document.querySelector(".button-open-modal-zz");
var popup0 = document.querySelector(".block0");
var openPopupButton0 = document.querySelector(".button-open-block0");
var popupL = document.querySelector(".modal-oz");
var openPopupButtonL = document.querySelector(".button-open-modal-oz-laptop");
var popupL1 = document.querySelector(".modal-zz");
var openPopupButtonL1 = document.querySelector(".button-open-modal-zz-laptop");
var popupD = document.querySelector(".modal-oz-desktop");
var openPopupButton = document.querySelector(".button-open-modal-oz");
var popupD1 = document.querySelector(".modal-zz-desktop");
var openPopupButtonD1 = document.querySelector(".button-open-modal-zz");
var pageHeader = document.querySelector(".page_header");
var main = document.querySelector(".main");
var footer = document.querySelector(".footer");

var closePopupButton = popup.querySelector(".button-close");
var closePopupButton1 = popup1.querySelector(".button-close");
var closePopupButton0 = popup0.querySelector(".button-close");
var closePopupButtonL = popupL.querySelector(".button-close");
var closePopupButtonL1 = popupL1.querySelector(".button-close");
var closePopupButtonD = popupL.querySelector(".button-close");
var closePopupButtonD1 = popupL1.querySelector(".button-close");

document.addEventListener("mousedown", function (e) {
  if (e.target.closest(".popup") === null) {
    // popup.style.display = 'none';
    popup0.classList.remove("block0--show");
    popup.classList.remove("modal-oz--show");
    popup1.classList.remove("modal-zz--show");
    popupL1.classList.remove("modal-zz--show");
    popupL.classList.remove("modal-oz--show");
    popupD1.classList.remove("modal-zz--show");
    popupD.classList.remove("modal-oz--show");
    document.querySelector(".main").style.filter = "none";
    document.querySelector(".page__header").style.filter = "none";
    document.querySelector(".footer").style.filter = "none";
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup0.classList.remove("block0--show");
    popup.classList.remove("modal-oz--show");
    popup1.classList.remove("modal-zz--show");
    popupL1.classList.remove("modal-zz--show");
    popupL.classList.remove("modal-oz--show");
    popupD1.classList.remove("modal-zz--show");
    popupD.classList.remove("modal-oz--show");
    document.querySelector(".main").style.filter = "none";
    document.querySelector(".page__header").style.filter = "none";
    document.querySelector(".footer").style.filter = "none";
  }
});

// popup0.addEventListener("click", function (event) {
//   if (event.target !== main) {
//     popup0.classList.remove("block0--show");
//     document.querySelector(".main").style.filter = "none";
//     document.querySelector(".page__header").style.filter = "none";
//     document.querySelector(".footer").style.filter = "none";
//   }
// });

// window.onclick = function (e) {
//   if (e.target !== popup0) {
//     document.querySelector(".block0--show").style.filter = "none";
//     document.querySelector(".main").style.filter = "none";
//     document.querySelector(".page__header").style.filter = "none";
//     document.querySelector(".footer").style.filter = "none";
//   }
// };

// document.addEventListener("mousedown", function (evt) {
//   if (popup.classList.contains("popup")) {
//     popup0.classList.remove("block0--show");
//     popup.classList.remove("modal-oz--show");
//     popup1.classList.remove("modal-zz--show");
//     popupL1.classList.remove("modal-zz--show");
//     popupL.classList.remove("modal-oz--show");
//     popupD1.classList.remove("modal-zz--show");
//     popupD.classList.remove("modal-oz--show");
//     document.querySelector(".main").style.filter = "none";
//     document.querySelector(".page__header").style.filter = "none";
//     document.querySelector(".footer").style.filter = "none";
//   }
// });

// main.addEventListener("click", function () {
//
// popup.addEventListener("click", (event) => event.stopPropagation());
// popup1.addEventListener("click", (event) => event.stopPropagation());
// popup0.addEventListener("click", (event) => event.stopPropagation());
// popupL1.addEventListener("click", (event) => event.stopPropagation());
// popupL.addEventListener("click", (event) => event.stopPropagation());
// popupD.addEventListener("click", (event) => event.stopPropagation());
// popupD1.addEventListener("click", (event) => event.stopPropagation());
// }

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-oz--show");
  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});
closePopupButton.addEventListener("click", function () {
  popup.classList.remove("modal-oz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.add("modal-zz--show");

  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});
closePopupButton1.addEventListener("click", function () {
  popup1.classList.remove("modal-zz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButton0.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup0.classList.add("block0--show");

  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});

closePopupButton0.addEventListener("click", function () {
  popup0.classList.remove("block0--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButtonL.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupL.classList.add("modal-oz--show");
  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});
closePopupButtonL.addEventListener("click", function () {
  popupL.classList.remove("modal-oz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButtonL1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupL1.classList.add("modal-oz--show");
  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});
closePopupButtonL1.addEventListener("click", function () {
  popupL1.classList.remove("modal-oz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButtonD.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupD.classList.add("modal-oz--show");
  document.querySelector(".main").style.filter = "blur(5px)";
  document.querySelector(".page__header").style.filter = "blur(5px)";
  document.querySelector(".footer").style.filter = "blur(5px)";
});
closePopupButtonD.addEventListener("click", function () {
  popupD.classList.remove("modal-oz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

openPopupButtonD1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupD1.classList.add("modal-oz--show");
  document.querySelector(".overlay").style.display = "block";
});
closePopupButtonD1.addEventListener("click", function () {
  popupD1.classList.remove("modal-oz--show");
  document.querySelector(".main").style.filter = "none";
  document.querySelector(".page__header").style.filter = "none";
  document.querySelector(".footer").style.filter = "none";
});

// var popupOutside = document.querySelector(".main");
// document.addEventListener("click", function (e) {
//   if (e.target === ".main") popup0.classList.remove("block0--show");
//   popup.classList.remove("modal-oz--show");
//   popup1.classList.remove("modal-zz--show");
//   popupL1.classList.remove("modal-zz--show");
//   popupL.classList.remove("modal-oz--show");
//   popupD1.classList.remove("modal-zz--show");
//   popupD.classList.remove("modal-oz--show");
//   document.querySelector(".main").style.filter = "none";
//   document.querySelector(".page__header").style.filter = "none";
//   document.querySelector(".footer").style.filter = "none";
// });
// window.onclick = (event) => {
//   if (!event.target.matches(".button-close")) {
//     if (
//       (popup0.classList.contains("block0--show"),
//       popup.classList.contains("modal-oz--show"),
//       popup1.classList.contains("modal-zz--show"),
//       popupL1.classList.contains("modal-zz--show"),
//       popupL.classList.contains("modal-oz--show"),
//       popupD1.classList.contains("modal-zz--show"),
//       popupD.classList.contains("modal-oz--show"))
//     ) {
//       popup0.classList.remove("block0--show");
//       popup.classList.remove("modal-oz--show");
//       popup1.classList.remove("modal-zz--show");
//       popupL1.classList.remove("modal-zz--show");
//       popupL.classList.remove("modal-oz--show");
//       popupD1.classList.remove("modal-zz--show");
//       popupD.classList.remove("modal-oz--show");
//       document.querySelector(".main").style.filter = "none";
//       document.querySelector(".page__header").style.filter = "none";
//       document.querySelector(".footer").style.filter = "none";
//     }
//   }
// };

// window.onload = function () {
//   var hidePopup = document.getElementById("popup");
//   document.onlick = function (e) {
//     if (e.target.id !== "popup") {
//       hidePopup.style.display = "none";
//     }
//   };
// };

// document.addEventListener("click", function (e) {
//   if (evt !== popup0) {
//     popup0.classList.remove("block0--show");
//     popup.classList.remove("modal-oz--show");
//     popup1.classList.remove("modal-zz--show");
//     popupL1.classList.remove("modal-zz--show");
//     popupL.classList.remove("modal-oz--show");
//     popupD1.classList.remove("modal-zz--show");
//     popupD.classList.remove("modal-oz--show");
//     document.querySelector(".main").style.filter = "none";
//     document.querySelector(".page__header").style.filter = "none";
//     document.querySelector(".footer").style.filter = "none";
//   }
// });

//   button.addEventListener("click", () => {
//     button.textContent = isHidden ? "Показать все" : "Скрыть";
//
//     isHidden = !isHidden;
//     hiddenItems.forEach((item) => item.classList.toggle("hidden"));
//   });
// } else {
//   const button = document.querySelector(".show-hide__button");
//   const hiddenItems = document.querySelectorAll(".hidden-item");
//   let isHidden = true;
//   button.addEventListener("click", () => {
//     button.textContent = isHidden ? "Показать все" : "Скрыть";
//
//     isHidden = !isHidden;
//     hiddenItems.forEach((item) => item.classList.toggle("hidden"));
//   });
// }
//
// if (window.matchMedia("(min-width: 719px)").matches) {
//   const swiperOff = document.querySelector(".swiper");
//   swiperOff.classList.remove(".swiper");
// } else {
//   swiperOff.classList.add(".swiper");
// }
// else {
//   const button1 = document.querySelector(".show-hide__button1");
//   const hiddenItems = document.querySelectorAll(".hidden-item1");
//   let isHidden = true;
//   button1.addEventListener("click", () => {
//     button1.textContent = isHidden ? "Показать все" : "Скрыть";
//
//     isHidden = !isHidden;
//     hiddenItems.forEach((item) => item.classList.toggle("hidden-con1"));
//   });
// }
//
// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//   },
//   mousewheel: true,
//   keyboard: true,
// });
// if (window.matchMedia("(min-width: 767.98px)").matches) {
//   swiper.destroy();
// }
//
// var swiper1 = new Swiper(".mySwiper1", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination1",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//   },
//   mousewheel: true,
//   keyboard: true,
// });
// if (window.matchMedia("(min-width: 767.98px)").matches) {
//   swiper1.destroy();
// }
//
// var swiper2 = new Swiper(".mySwiper2", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//   },
//   mousewheel: true,
//   keyboard: true,
// });
// if (window.matchMedia("(min-width: 767.98px)").matches) {
//   swiper2.destroy();
// }
