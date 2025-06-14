$(document).ready(function () {
  $(".partner_carousel").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1122,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

AOS.init();

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Resources Dropdown Toggle (Mobile)
const resourcesToggle = document.getElementById("resources-toggle");
const resourcesDropdown = document.getElementById("resources-dropdown");
resourcesToggle.addEventListener("click", () => {
  resourcesDropdown.classList.toggle("hidden");
});
// window.addEventListener("scroll", () => {
//   AOS.refresh();
// });

// document.addEventListener("scroll", function () {
//   console.log("Scroll started");
//   let textElement = document.getElementById("scrollText");
//   if (!textElement) return; // Prevent errors if element is missing

//   let scrollY = window.scrollY;
//   let factor = window.innerWidth < 768 ? 0.5 : 0.7;
//   let translateY = -1000 + scrollY * factor; // Moves up from -1000px

//   textElement.style.transform = `translateY(${translateY}px)`;
//   textElement.style.opacity = Math.min(1, scrollY / 500); // Smooth fade-in
// });

// Optimize scroll event with requestAnimationFrame
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      AOS.refresh(); // If using AOS, refresh it in a less frequent way
      updateTextPosition();
      ticking = false;
    });
    ticking = true;
  }
});

function updateTextPosition() {
  let textElement = document.getElementById("scrollText");
  if (!textElement) return;

  let scrollY = window.scrollY;
  let factor;
  // = window.innerWidth < 768 ? 0.5 : 0.8;
  if (window.innerWidth < 768) {
    factor = 0.4; // Mobile - Small screens
  } else if (window.innerWidth < 1200) {
    factor = 0.4; // Mobile - Medium screens
  } else {
    factor = 0.7; // Tablets
  }
  let translateY = -1000 + scrollY * factor; // Moves up from -1000px

  textElement.style.transform = `translateY(${-translateY}px)`;
  textElement.style.opacity = Math.min(1, scrollY / 500); // Smooth fade-in
}

// document.getElementById("menu-toggle").addEventListener("change", function () {
//   if (this.checked) {
//     document.body.classList.add("no-scroll");
//   } else {
//     document.body.classList.remove("no-scroll");
//   }
// });

// function toggleModal(name = "", role = "", image = "", desc = "") {
//   const modal = document.getElementById("modal");
//   const modalName = document.getElementById("modal-name");
//   const modalRole = document.getElementById("modal-role");
//   const modalImage = document.getElementById("modal-image");
//   const modalDesc = document.getElementById("modal-desc");

//   if (name && role && image) {
//     modalName.textContent = name;
//     modalRole.textContent = role;
//     modalImage.src = image;
//     modalDesc.textContent = desc;
//   }

//   if (modal.classList.contains("opacity-0")) {
//     modal.classList.remove("opacity-0", "scale-95", "pointer-events-none");
//     modal.classList.add("opacity-100", "scale-100","blow-up");
//     document.body.classList.add("no-scroll");
//   } else {
//     modal.classList.remove("opacity-100", "scale-100");
//     modal.classList.add("opacity-0", "scale-95", "pointer-events-none","blow-down");
//     document.body.classList.remove("no-scroll");
//   }
// }

// Graph Carousel

// function toggleModal(name = "", role = "", image = "", desc = "") {
//   const modal = document.getElementById("modal");
//   const modalName = document.getElementById("modal-name");
//   const modalRole = document.getElementById("modal-role");
//   const modalImage = document.getElementById("modal-image");
//   const modalDesc = document.getElementById("modal-desc");

//   if (name && role && image) {
//     modalName.textContent = name;
//     modalRole.textContent = role;
//     modalImage.src = image;
//     modalDesc.textContent = desc;
//   }

//   if (modal.classList.contains("opacity-0")) {
//     // Remove blow-down before adding blow-up
//     modal.classList.remove("blow-down");

//     modal.classList.remove("opacity-0", "scale-95", "pointer-events-none");
//     modal.classList.add("opacity-100", "scale-100", "blow-up");

//     document.body.classList.add("no-scroll");
//   } else {
//     // Remove blow-up and wait before adding blow-down
//     modal.classList.remove("blow-up");

//     modal.classList.add("blow-down");

//     modal.classList.remove("opacity-100", "scale-100");
//     modal.classList.add("opacity-0", "scale-95", "pointer-events-none");

//     document.body.classList.remove("no-scroll");
//   }
// }

$(document).ready(function () {
  $(".graph_Carousel").slick({
    centerMode: true,
    centerPadding: "470px",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
    ],
  });
});

// Case Study Carousel
$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "0px",
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1122,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
  $(".next_new").on("click", function () {
    $(".slider").slick("slickNext");
  });

  // Previous button click
  $(".previous_new").on("click", function () {
    $(".slider").slick("slickPrev");
  });
});

$(document).ready(function () {
  $(".partner_new_slider").slick({
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    // autoplaySpeed: 0,
    // speed: 3000,
    // cssEase: "linear",
    // pauseOnHover: false,
    // swipe: false,
    // draggable: false,
    responsive: [
      {
        breakpoint: 1122,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".next").on("click", function () {
    $(".partner_new_slider").slick("slickNext");
  });

  // Previous button click
  $(".previous").on("click", function () {
    $(".partner_new_slider").slick("slickPrev");
  });
});

// --------------Mountain Section Cards-------------
// setTimeout(() => {
//   document.getElementById("section1").classList.remove("opacity-0");
//   document.getElementById("section1").setAttribute("data-aos-delay", "500");
// }, 0);

// setTimeout(() => {
//   document.getElementById("section2").classList.remove("opacity-0");
//   document.getElementById("section2").setAttribute("data-aos-delay", "1000");
// }, 1000);

// setTimeout(() => {
//   document.getElementById("section3").classList.remove("opacity-0");
//   document.getElementById("section3").setAttribute("data-aos-delay", "1500");
// }, 1500);

// ----------------Service Section Cards-----------------
// setTimeout(() => {
//   document.getElementById("service1").classList.remove("opacity-0");
//   document.getElementById("service1").setAttribute("data-aos-delay", "500");
// }, 0);

// setTimeout(() => {
//   document.getElementById("service2").classList.remove("opacity-0");
//   document.getElementById("service2").setAttribute("data-aos-delay", "1000");
// }, 1000);

// setTimeout(() => {
//   document.getElementById("service3").classList.remove("opacity-0");
//   document.getElementById("service3").setAttribute("data-aos-delay", "1500");
// }, 1500);

// -----------------Navbar-----------------
// let toggleBtn = document.querySelector("#navbar-toggle");
// let collapse = document.querySelector("#navbar-collapse");

// toggleBtn.onclick = () => {
//   collapse.classList.toggle("hidden");
//   collapse.classList.toggle("flex");
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const productButton = document.querySelector(".who-we-button");
//   const productMenu = document.querySelector(".who-we-menu");

//   if (productButton && productMenu) {
//     productButton.addEventListener("click", function () {
//       productMenu.classList.toggle("hidden");
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener("click", function (event) {
//       if (
//         !productButton.contains(event.target) &&
//         !productMenu.contains(event.target)
//       ) {
//         productMenu.classList.add("hidden");
//       }
//     });
//   }
// });

// // Mobile
// document.addEventListener("DOMContentLoaded", function () {
//   const productButtonMobile = document.querySelector(".who-we-button-mobile");
//   const productMenuMobile = document.querySelector(".who-we-menu-mobile");

//   if (productButtonMobile && productMenuMobile) {
//     productButtonMobile.addEventListener("click", function () {
//       productMenuMobile.classList.toggle("hidden");
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener("click", function (event) {
//       if (
//         !productButtonMobile.contains(event.target) &&
//         !productMenuMobile.contains(event.target)
//       ) {
//         productMenuMobile.classList.add("hidden");
//       }
//     });
//   }
// });

// ------------------Mountain Text Show Hide--------------------
// document.addEventListener("scroll", function () {
//   let scrollY = window.scrollY;
//   let textElement = document.getElementById("scrollText");
//   let translateY;
//   if (window.innerWidth < 768) {
//     translateY = Math.min(scrollY * 0.5, 1400);
//   } else if (window.innerWidth > 1800) {
//     translateY = Math.min(scrollY * 0.7, 1300);
//   } else {
//     translateY = Math.min(scrollY * 0.7, 1200);
//   }
//   textElement.style.transform = `translateY(-${translateY}px)`;
// });

// function toggleDropdown(event, id) {
//   event.preventDefault();
//   document.getElementById(id).classList.toggle("hidden");
// }

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("button_carousel_two");
  const track_one = document.getElementById("button_carousel_one");
  const track_three = document.getElementById("button_carousel_three");
  const track_four = document.getElementById("button_carousel_four");
  const items = Array.from(track.children);
  const itemsOne = Array.from(track_one.children);
  const itemsThree = Array.from(track_three.children);
  const itemsFour = Array.from(track_four.children);

  // Clone items to make an infinite scrolling effect
  items.forEach((item) => {
    let clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  itemsOne.forEach((item) => {
    let clone = item.cloneNode(true);
    track_one.appendChild(clone);
  });

  itemsThree.forEach((item) => {
    let clone = item.cloneNode(true);
    track_three.appendChild(clone);
  });

  itemsFour.forEach((item) => {
    let clone = item.cloneNode(true);
    track_four.appendChild(clone);
  });
});

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
