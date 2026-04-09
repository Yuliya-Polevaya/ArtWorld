let menuBtn = document.getElementById('menuBtn');
let popupMenu = document.getElementById('popupMenu');
let links = document.querySelectorAll('#navbar a');

console.log(menuBtn);
console.log(popupMenu);
console.log(links);

menuBtn.onclick = function() {
    console.log('при нажатии кнопка работпет');
    popupMenu.classList.add('open');
    console.log('Класс active добавлен'); // Проверяем
}

// ===== ЗАКРЫТИЕ ПРИ КЛИКЕ НА ССЫЛКУ =====
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        console.log('работает при нажатии на ссылку');
        popupMenu.classList.remove('open');
    }
}

// ===== ЗАКРЫТИЕ ПРИ КЛИКЕ НА ФОН =====
popupMenu.onclick = function(event) {
    if (event.target === popupMenu) {
        popupMenu.classList.remove('open');
    }
}

// создание массива
const messages = [
    "Искусство делает мир ярче!",
    "Каждая картина — маленькое чудо!",
    "Твори, вдохновляй, удивляй!",
    "Вдохновение рядом с тобой!",
    "Красота в деталях, открой её глазами!"
];
// первая надпись
let index = 0;
// ищем элемент
const motiv = document.getElementById('motiv');

setInterval(() => {
// меняем элемент и после того как все закончилось начинаем заново
    index = (index + 1) % messages.length;
    motiv.textContent = messages[index];
}, 4000); // каждые 4 секунды меняется
