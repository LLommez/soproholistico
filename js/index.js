// Script para animações, efeitos de scroll ou carrossel
// Exemplo de rolagem suave para as seções ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;
const items = document.querySelectorAll('.list li');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('act');
    items[currentIndex].classList.add('hide');

    currentIndex = (currentIndex + 1) % totalItems;

    items[currentIndex].classList.remove('hide');
    items[currentIndex].classList.add('act');

    const offset = -currentIndex * 100; // Ajusta a posição do carrossel
    document.querySelector('.list').style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada 5 segundos
setInterval(showNextItem, 5000);

