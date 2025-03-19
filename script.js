const box = document.getElementById('game-box');
const scoreEl = document.getElementById('score');
const sound = document.getElementById('click-sound');
let score = 0;

// Ekranning real o‘lchamlarini olish
function getScreenSize() {
    return {
        width: document.documentElement.clientWidth - box.clientWidth,
        height: document.documentElement.clientHeight - box.clientHeight
    };
}

// Rasmni tasodifiy joyga ko‘chirish funksiyasi
function moveBox() {
    const { width, height } = getScreenSize();
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    box.style.position = "absolute";
    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

// Rasm bosilganda amalga oshadigan harakatlar
box.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    sound.play();

    // Kichraytirish va qaytarish animatsiyasi
    box.style.transform = "scale(0.5)";
    setTimeout(() => {
        box.style.transform = "scale(1)";
        moveBox(); // Kichrayishdan keyin darhol qochib qoladi
    }, 200);
});

moveBox(); // O‘yinni boshlash

// Ekran o‘lchami o‘zgarsa rasmni moslashtirish
window.addEventListener('resize', moveBox);