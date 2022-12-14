// import './style.css'

const mobileNavBtn = document.querySelector("#mobileNavBtn");
const mobileNav = document.querySelector(".nav-links");
const navBg = document.querySelector(".nav-bg");
const closeNavBtn = document.querySelector("#closeNavBtn");
const navLinks = document.querySelectorAll(".nav-link");

const toggleOpenAttribute = (arrayOfItems) => {
  arrayOfItems.forEach(i => {
    const isOpen = i.hasAttribute("open");
    isOpen ? i.removeAttribute("open") : i.setAttribute("open", "")
  });
};

const toggleTabIndexes = (arrayOfItems) => {
  arrayOfItems.forEach(i => {
    const isTabbable = i.tabIndex === -1;
    isTabbable ? i.setAttribute("tabIndex", "0") : i.setAttribute("tabIndex", "-1");
  })
};

const handleMobileNavClick = (e) => {
  mobileNav.style.transition = "transform 400ms ease-in-out"; 
  // const isOpen = JSON.parse(e.target.getAttribute("aria-expanded"));
  // e.target.setAttribute("aria-expanded", !isOpen)
  // // Change State of Button
  // console.log(JSON.stringify(e.target.getAttribute("aria-expanded")))
  // Open Mobile Nav and Toggle Grey Bakground
  toggleOpenAttribute([mobileNav, navBg]);
  // Toggle all tabindexes
  toggleTabIndexes([...navLinks, closeNavBtn]);
};

const closeMobileNav = (e) => {
  mobileNav.setAttribute("aria-expanded", "false")
  toggleOpenAttribute([mobileNav, navBg]);
};


mobileNavBtn.addEventListener("click", handleMobileNavClick);

navBg.addEventListener("click", closeMobileNav);

closeNavBtn.addEventListener("click", closeMobileNav);

window.addEventListener("keydown", (e) => {
  if (navBg.hasAttribute("open")) {
    return e.key === "Escape" && closeMobileNav();
  }
})