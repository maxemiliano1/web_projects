window.onload = function () {
    document.querySelector(".menu-list").style.display = "none";
    document.querySelector(".button-header").style.display = "none";

    document.querySelector(".menumobile").addEventListener("click", function () {
        const menuList = document.querySelector(".menu-list");
        const buttonHeader = document.querySelector(".button-header");

        const isOpen = menuList.style.display === "flex";

        menuList.style.display = isOpen ? "none" : "flex";
        buttonHeader.style.display = isOpen ? "none" : "flex";
    });
  };