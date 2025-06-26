window.onload = function () {
    const menuList = document.querySelector(".nav-header");
    const menuMobile = document.querySelector(".menu-mobile");
    const BntMobile = document.querySelector(".bnt-mobile");

    menuMobile.addEventListener("click", function () {
        menuList.classList.toggle("ativo");
        BntMobile.classList.toggle("ativo");
    });
};

