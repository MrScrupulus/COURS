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
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNav();
  });
  document.addEventListener("click", (e) => {
    if (ulMobile.classList.contains("toggled") && !hamburger.contains(e.target))
      toggleNav();
  });

  window.addEventListener("scroll", () => {
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.classList.remoce("toggled");
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 750 }
      );
    }
  });
});
