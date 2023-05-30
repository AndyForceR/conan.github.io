"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 80, // Adjust the spacing between slides as needed
  loop: true, // Add the loop option for infinite loop
  loopedSlides: 3,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// HAMBURGER MENU DESIGN
const hambMenuBtn = document.querySelector(".menu-toggle");
const inoutMenu = document.querySelector(".inout-menu");
const slider = document.querySelector(".slider");
const inputBtn = document.getElementById("tagSearchInput");

hambMenuBtn.addEventListener("click", () => {
  hambMenuBtn.classList.toggle("is-active");
  document.body.classList.toggle("body-scroll-off");
  inoutMenu.classList.toggle("inout-menu-open");
  inputBtn.focus();
});

// BLOG POSTS PAGINATION CODE
let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll(".list .item");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}

const listItems = document.querySelector(".listPage");

function changePage(i) {
  thisPage = i;
  loadItem();
  translateListItems();
}

function translateListItems() {
  let translateX = 87 * (thisPage - 1);
  listItems.style.transform = `translateX(-${translateX}px)`;
}

loadItem();

function listPage() {
  // Total number of pages
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";
  document.querySelector(".last-page-container").innerHTML = "";
  document.querySelector(".first-page-container").innerHTML = "";

  // if (thisPage > 1) {
  //   let prev = document.createElement("li");
  //   prev.innerText = "PREV";
  //   prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
  //   document.querySelector(".listPage").appendChild(prev);
  // }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i === thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }

  // if (thisPage < count) {
  //   let next = document.createElement("li");
  //   next.innerText = "NEXT";
  //   next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
  //   document.querySelector(".listPage").appendChild(next);
  // }

  if (thisPage >= 1) {
    let lastPage = document.createElement("li");
    lastPage.innerText = "LAST";
    lastPage.setAttribute("onclick", "changePage(" + count + ")");
    document.querySelector(".last-page-container").appendChild(lastPage);
  }

  if (thisPage >= 1 && thisPage >= 2) {
    let firstPage = document.createElement("li");
    firstPage.innerText = "FIRST";
    firstPage.setAttribute("onclick", "changePage(1)");
    document.querySelector(".first-page-container").appendChild(firstPage);
  }
}

// TAGS BUTTONS TOGGLE ACTIVE CLASS ON CLICK
const tagBtns = document.querySelectorAll(".tag-button");
const tagsDisplayAllBtn = document.querySelector(".tag-button-all");
const blogTagsAll = document.querySelector(".blog-tags-all");
const blogPostSection = document.querySelector(".blog-post-section");

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener("click", (event) => {
    tagBtns.forEach((button) => {
      button.classList.remove("tag-active");
    });
    tagBtn.classList.add("tag-active");
    blogPostSection.scrollIntoView({ behavior: "smooth" });
  });
});

tagsDisplayAllBtn.addEventListener("click", () => {
  blogTagsAll.classList.toggle("show-all-tags");
});

// DISPLAY HIDE MENU
// const inoutMenu = document.querySelector(".inout-menu");
// const inoutMenuBtn = document.querySelector(".menu-toggle");

// inoutMenuBtn.addEventListener("click", () => {
//   inoutMenu.classList.toggle("inout-menu-open");
// });

// BACK TO TOP BTN
const backTopBtn = document.querySelector(".backtop-btn");

backTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// MENU SLIDER
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 70, // Adjust the spacing between slides as needed
  loop: false, // Add the loop option for infinite loop
  loopedSlides: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// PHONE SLIDER

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0, // Adjust the spacing between slides as needed
  loop: false, // Add the loop option for infinite loop
  loopedSlides: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// function toggleHideSlideClass() {
//   const sliderPagination = document.querySelector(".slider-pagination");
//   if (window.innerWidth < 500) {
//     sliderPagination.classList.add("hide-slider");
//   } else {
//     sliderPagination.classList.remove("hide-slider");
//   }
// }

// // Initial check when the page loads
// toggleHideSlideClass();

// // Attach the event listener to the window's resize event
// window.addEventListener("resize", toggleHideSlideClass);


