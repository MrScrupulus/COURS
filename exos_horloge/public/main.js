const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  const ulMobile = document.querySelector("#nav-mobile");

  ulMobile.classList.toggle("toggled");
  const toggleNav = [
    {
      transform: "translate(100%)",
    },
    {
      transform: "translate(0)",
    },
  ];
  const option = {
    fill: "forwards",
    duration: 1000,
  };

  if (ulMobile.classList.contains("toggled")) {
    ulMobile.animate(toggleNav, option);
  }
  const bodyAll = document.querySelectorAll("nav:not(#nav-mobile)");
  bodyAll.addEventListener("click", () => {
    // bodyAll.contains(":not #nav-mobile");
    bodyAll.animate(toggleNav.reverse(), option);
  });
});
