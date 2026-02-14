let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Mostrar slide específico
function showSlide(n) {
    // Remover clase active de todos los slides y dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Agregar clase active al slide y dot actual
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// Ir al siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Ir al slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Ir a un slide específico
function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Event listeners para los botones
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Navegación con teclado (flechas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Inicializar el primer slide
showSlide(0);

// Animar corazones adicionales en el fondo
function createFloatingHearts() {
    const heartsBackground = document.querySelector('.hearts-background');
    
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = Math.random() * 0.2 + 0.05;
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float ${Math.random() * 4 + 4}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.textContent = '❤️';
        
        heartsBackground.appendChild(heart);
    }
}

// Crear corazones flotantes cuando carga la página
window.addEventListener('load', createFloatingHearts);

