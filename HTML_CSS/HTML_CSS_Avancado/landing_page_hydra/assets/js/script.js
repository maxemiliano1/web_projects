
window.onload = function () {
    const menuList = document.querySelector(".menu-list");
    const buttonHeader = document.querySelector("header .button");
    const menuMobile = document.querySelector(".menumobile");

    menuMobile.addEventListener("click", function () {
        menuList.classList.toggle("ativo");
        buttonHeader.classList.toggle("ativo");
    });
  };

