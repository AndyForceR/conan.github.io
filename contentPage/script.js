const asideContent = document.querySelector(".aside-content");
const initialCoords = asideContent.getBoundingClientRect();

window.addEventListener("scroll", function () {
  const windowWidth = window.innerWidth; // Get the width of the window

  if (window.scrollY > initialCoords.top + 10 && windowWidth >= 1670) {
    asideContent.classList.add("sticky");
    // document.querySelector(".empty-aside-content").classList.add("empty-aside-content-display");
  } else {
    asideContent.classList.remove("sticky");
    // document.querySelector(".empty-aside-content").classList.remove("empty-aside-content-display");
  }
});

// SLIDER FOR PHONE BOTTOM
var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 100, // Adjust the spacing between slides as needed
  loop: true, // Add the loop option for infinite loop
  loopedSlides: 1,
  pagination: {
    el: ".swiper-pagination4",
    type: "fraction",
    clickable: true, // Enable navigation when bullet is clicked
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
