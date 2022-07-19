document
  .querySelectorAll(".menu-toggle-btn-wrapper")
  .forEach((menuBtnWrapper) => {
    menuBtnWrapper.addEventListener("click", () => {
      menuBtnWrapper.classList.toggle("open");
    });
  });
