window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
  showBackToTopButtonOnScroll();
}

function toggleMenu() {
  const menu = document.querySelector("#navigation .container");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

function showBackToTopButtonOnScroll() {
  const backToTop = document.querySelector('#backToTopButton');

  if (scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

document.querySelectorAll(".menuItem").forEach((item) => {
  item.addEventListener("click", colapseFooterMenu);
});

function colapseFooterMenu(item) {
  item.target.classList.contains("active")
    ? item.target.classList.remove("active")
    : item.target.classList.add("active");
}

function InputPhoneMask(value) {
  const number = value.target.value;
  const v = number.toString();

  let i = 0;
  let pattern = "";

  if (number.length < 10 || number.length > 11) {
    return;
  }

  console.log("chamei");
  if (number.length === 10) {
    pattern = "(##) ####-####";
  } else {
    pattern = "(##) #####-####";
  }

  value.target.value = pattern.replace(/#/g, () => v[i++] || "");
}

var swiper = new Swiper(".clientsCarousel", {
  spaceBetween: 10,
  loop: true,
  speed: 4000,
  breakpoints: {
    900: {
      slidesPerView: 6,
    },
    700: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(`
  #banner,
  #banner .bannerContent,
  #services,
  #services .servicesContent,
  #services .servicesCard,
  #dataDriven .dataDrivenContent,
  #dashboards .dashboardsContent,
  #dashboards .dashboardsContent .dashboardsText,
  #dashboards .dashboardsContent img,
  #integrated,
  #integrated .integratedContent,
  #integrated .integratedContent img,
  #integrated .integratedContent .integratedText,
  #media,
  #media .mediaContent,
  #media .mediaContent .titleContent,
  #media .mediaContent .mediaGrid,
  #media .mediaContent .mediaGrid .mediaCard,
  #contact,
  #contact .contactContent,
  #contact .contactContent .titleContent,
  #contact .contactContent form
`);
