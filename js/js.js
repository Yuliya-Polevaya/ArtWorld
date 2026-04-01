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

