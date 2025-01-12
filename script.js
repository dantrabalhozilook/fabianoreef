const images = document.querySelectorAll(".carousel-images img");
const dots = document.querySelectorAll(".carousel-dots .dot");
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100; // Desloca as imagens horizontalmente
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;

    // Atualizar as bolinhas
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Passa para o próximo banner
    showSlide(currentIndex);
}

// Troca automática a cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Controle manual com as bolinhas
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        clearInterval(autoSlide); // Pausa o carrossel ao clicar
        currentIndex = parseInt(dot.dataset.index);
        showSlide(currentIndex);
        autoSlide = setInterval(nextSlide, 5000); // Reinicia o carrossel automático
    });
});

// Exibir o primeiro slide inicialmente
showSlide(currentIndex);
const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');
const body = document.body;
const closeButton = document.querySelector('.close-btn');  // Botão de fechar
const hamburgerMenu = document.querySelector('.hamburger-menu');  // Elemento hamburger-menu

// Função para alternar o menu ao clicar no ícone de hambúrguer
menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    sideMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
    body.classList.toggle('menu-open');
    hamburgerMenu.classList.add('hidden');  // Oculta o menu de hambúrguer ao abrir o menu
});

// Função para fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        sideMenu.classList.remove('active');
        menuIcon.classList.remove('active');
        body.classList.remove('menu-open');
        hamburgerMenu.classList.remove('hidden');  // Exibe o menu de hambúrguer com a transição suave
    }
});

// Função para fechar o menu ao clicar no botão de fechar ("X")
closeButton.addEventListener('click', (event) => {
    event.stopPropagation();  // Impede a propagação do evento de clique
    sideMenu.classList.remove('active');
    menuIcon.classList.remove('active');
    body.classList.remove('menu-open');
    hamburgerMenu.classList.remove('hidden');  // Exibe o menu de hambúrguer com a transição suave
});


