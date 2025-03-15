// Управление громкостью
const audio = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');

audio.volume = 0.4; // Стандартная громкость

volumeSlider.addEventListener('input', (event) => {
    audio.volume = event.target.value;
});

// Переключение между дневной и ночной темами
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Добавляет/убирает класс "dark-mode"

    // Меняем текст кнопки в зависимости от темы
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
