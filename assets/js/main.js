const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*==========show menu===========*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
/*==========hide menu===========*/
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

/*==========testimonial swiper===========*/
var swiper = new Swiper(".testimonial-wrapper", {
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==========remove menu mobile===========*/
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when  we click on each nav link, we remove the show menu class
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*==========change background header===========*/
function scrollHeader() {
  const header = document.getElementById("header");
  // when the scroll is greater then 80 viewport height, and the class scroll header to the tag header
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==========scroll active link===========*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*==========portfolio item filter===========*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItem = portfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.add("hide");
        portfolioItems[k].classList.remove("show");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}
/*==========Theme display customization===========*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
const root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
// close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);
/*==========fonts===========*/
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
    } else if (size.classList.contains("font-size-2")) fontSize = "14px";
    else if (size.classList.contains("font-size-3")) fontSize = "16px";
    else if (size.classList.contains("font-size-4")) fontSize = "18px";
    // change font size of root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});
/*==========primary colors===========*/
//rmv colors

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    colorPalette.forEach((colorPicker) => {
      colorPicker.classList.remove("active");
    });
    if (color.classList.contains("color-1")) primaryHue = 252;
    else if (color.classList.contains("color-2")) primaryHue = 52;
    else if (color.classList.contains("color-3")) primaryHue = 352;
    else if (color.classList.contains("color-4")) primaryHue = 152;
    else if (color.classList.contains("color-5")) primaryHue = 200;

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});
/*==========theme bg===========*/
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// change bg
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  // remove active class
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  Bg2.classList.add("active");
  // remove active class
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  Bg3.classList.add("active");
  // remove active class
  Bg2.classList.remove("active");
  Bg1.classList.remove("active");
  changeBG();
});

// == Date ==
const dateSpan = document.querySelector("#date");
const thisYear = new Date().getFullYear();
dateSpan.innerHTML = thisYear;
//
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_h9wpiel";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

// CONTACT FEILDS
function contactInput(){
const message = document.getElementById("message").value.length;
console.log(message)
}