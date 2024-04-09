/*===== MENU SHOW =====*/

const toggler = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const menu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-item");

const contact = document.querySelector(".contact-btn");
const overlay = document.querySelector(".overlay");
const homeContact = document.querySelector(".contact-me");
const close = document.querySelector(".close");
const send = document.querySelector(".send");


const aboutMe = document.querySelector(".ab-btn");
const aboutContact = document.querySelector(".cf-btn");
const aboutMeDoc = document.querySelector(".about");
const doc = document.querySelector(".cont");

const theme = document.querySelector(".theme");
const sections = document.querySelectorAll("section[id]");


theme.addEventListener("click", () => {
  theme.classList.toggle("active");
  body.classList.toggle("active");
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home-data, .about-img, .skills__subtitle, .skills__text", {});
sr.reveal(".home-img, .about-subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home-social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

toggler.addEventListener("click", () => {
  let delay = 0; // Initialize a delay counter

  navLinks.forEach((item) => {
    setTimeout(() => {
      item.classList.add("show"); // Add the 'show' class for animation
    }, delay);
    delay += 300; // Increment delay for the next link
  });

  menu.classList.toggle("active");
  toggler.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    toggler.classList.remove("active");
    menu.classList.remove("active");
  });
});

//contatc me

contact.addEventListener("click", () => {
  homeContact.classList.remove("hidden");
  overlay.classList.add("overlays");
});

close.addEventListener("click", () => {
  homeContact.classList.add("hidden");
  overlay.classList.remove("overlays");
});

send.addEventListener("click", () => {
  homeContact.classList.add("hidden");
  overlay.classList.remove("overlays");
});




aboutMe.addEventListener("click", () => {
  aboutMeDoc.classList.toggle("hidden");
  aboutContact.classList.toggle("hidden");
});

aboutContact.addEventListener("click", () => {
  doc2.classList.toggle("hidden");
  b.classList.toggle("hidden");
});
