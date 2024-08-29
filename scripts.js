// Инициализация AOS
AOS.init({
    duration: 1000, // Анимация длится 1 секунду
    easing: 'ease-in-out', // Плавное изменение
});

// Функция для плавной прокрутки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }); });
