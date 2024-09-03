const hamburger = document.querySelector("#hamburger");
const ulMobile = document.querySelector("#nav-mobile");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");

document.addEventListener("DOMContentLoaded", () => {
  main.style.paddingTop = `${nav.offsetHeight + 2}px`;
});
document.addEventListener("DOMContentLoaded", () => {
  ulMobile.style.marginTop = `${nav.offsetHeight + h1.offsetHeight + 1}px`;
});

const toggleMenu = () => {
  ulMobile.classList.toggle("toggled");
  const toggleNav = [
    {
      transform: "translate(100%)",
    },
    {
      transform: "translate(0)",
    },
  ];
  const options = {
    fill: "forwards",
    duration: 1000,
  };
  if (ulMobile.classList.contains("toggled")) {
    ulMobile.classList.remove("hidden"); // Affiche le menu
    ulMobile.animate(toggleNav, options);
  } else {
    ulMobile.animate(toggleNav.reverse(), options).onfinish = () => {
      ulMobile.classList.add("hidden"); // Masque le menu après l'animation
    };
  }
};

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation du clic pour éviter de fermer immédiatement le menu
  toggleMenu();
});

// Gestionnaire d'événement pour détecter les clics en dehors du menu
document.addEventListener("click", (e) => {
  if (ulMobile.classList.contains("toggled") && !hamburger.contains(e.target)) {
    toggleMenu();
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 20) {
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.classList.remove("toggled");
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 750 }
      );
    }
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    main.style.paddingTop = `${nav.offsetHeight + 2}px`;
    ulMobile.style.marginTop = `${nav.offsetHeight + h1.offsetHeight + 1}px`;
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 0 }
      );
    }
  }
  const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("110vh", `${vh}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
});

//
