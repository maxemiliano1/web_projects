
window.onload = function () {
    const menuList = document.querySelector(".menu-list");
    const buttonHeader = document.querySelector("header .button");
    const menuMobile = document.querySelector(".menumobile");

    menuMobile.addEventListener("click", function () {
        menuList.classList.toggle("ativo");
        buttonHeader.classList.toggle("ativo");
    });
};

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carrossel = document.querySelector('.carrossel-container');

// Avança 1 item (scroll para direita)
nextBtn.addEventListener('click', () => {
    carrossel.scrollBy({
        left: 240, // valor do item + espaçamento
        behavior: 'smooth'
    });
});

// Volta 1 item (scroll para esquerda)
prevBtn.addEventListener('click', () => {
    carrossel.scrollBy({
        left: -240,
        behavior: 'smooth'
    });
});
