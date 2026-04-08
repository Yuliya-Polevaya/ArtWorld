async function fetchData() {
    const response = await fetch("http://localhost/myserver/get.php");
    return await response.json();
}

// Художники
function loadArtists(data) {
    // создаем контейнер для картин
    const container = document.querySelector(".artists");
// Поверяем есть ли контейнер и данные в нем
    if (container && data.artists) {
        // Отчищаем
        container.innerHTML = "";

        data.artists.forEach(a => {
            const card = document.createElement("div");
            // смотрим есть ли блок
            card.className = "artists_card";
            // сохраняем id
            card.dataset.id = a.id;
            // создаем карточку
            card.innerHTML = `
                <img src="${a.photo_artist || 'default_artist.jpg'}">
                <div class="card_body">
                    <h3>${a.art_name}</h3>
                    <p>${a.country || "-"}</p>
                </div>
            `;
            // открываем при нажатии страничку
            card.onclick = () => {
                localStorage.setItem("artistId", a.id);
                window.location.href = "artist.html";
            };
            container.appendChild(card);
        });
    }
    // создание странички
    const artistId = localStorage.getItem("artistId");
    if (artistId && data.artists) {
        const artist = data.artists.find(a => a.id == artistId);
        if (!artist) return;
        // достаем имя и вствляем как заголовок
        if (document.getElementById("art_name"))
            document.getElementById("art_name").textContent = artist.art_name;
        // вставляем фото
        const img = document.querySelector(".photo_artist img");
        if (img) img.src = artist.photo_artist || 'default_artist.jpg';
        // заполняем данными поля если  нет данных то -
        document.querySelectorAll(".info .art_name p").forEach(el => el.textContent = artist.art_name);
        document.querySelectorAll(".info .date_of_birth p").forEach(el => el.textContent = artist.date_of_birth || "-");
        document.querySelectorAll(".info .date_of_death p").forEach(el => el.textContent = artist.date_of_death || "-");
        document.querySelectorAll(".info .country p").forEach(el => el.textContent = artist.country || "-");
        // заполняем биографию
        const bio = document.querySelector(".biography p");
        if (bio) bio.textContent = artist.biography || "-";
    }
}

// Картины
function loadPaintings(data) {
    const container = document.querySelector(".paintings");

    if (container && data.paintings) {
        container.innerHTML = "";

        data.paintings.forEach(p => {
            const card = document.createElement("div");
            card.className = "paintings_card";

            card.innerHTML = `
                <img src="${p.paintings_picture || 'default_paint.jpg'}">
                <div class="card_body">
                    <h3>${p.paintings_title}</h3>
                    <p>${p.artists_name || "-"}</p>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem("paintId", p.paintings_id);
                window.location.href = "picture.html";
            };

            container.appendChild(card);
        });
    }

    const id = localStorage.getItem("paintId");
    if (id && data.paintings) {
        const p = data.paintings.find(x => x.paintings_id == id);
        if (!p) return;

        if (document.getElementById("title"))
            document.getElementById("title").textContent = p.paintings_title;

        const img = document.querySelector(".picture img");
        if (img) img.src = p.paintings_picture || 'default_paint.jpg';

        document.querySelectorAll(".info .title p").forEach(el => el.textContent = p.paintings_title);
        document.querySelectorAll(".info .year_created p").forEach(el => el.textContent = p.paintings_year_created || "-");
        document.querySelectorAll(".info .artist_id p").forEach(el => el.textContent = p.artists_name || "-");
        document.querySelectorAll(".info .genre_id p").forEach(el => el.textContent = p.genres_name || "-");
        document.querySelectorAll(".info .style_id p").forEach(el => el.textContent = p.styles_name || "-");
        document.querySelectorAll(".info .height_cm p").forEach(el => el.textContent = p.paintings_height_cm || "-");
        document.querySelectorAll(".info .width_cm p").forEach(el => el.textContent = p.paintings_width_cm || "-");
        document.querySelectorAll(".info .material p").forEach(el => el.textContent = p.paintings_material || "-");
        document.querySelectorAll(".info .technique p").forEach(el => el.textContent = p.paintings_technique || "-");
        document.querySelectorAll(".info .current_museum_id p").forEach(el => el.textContent = p.museums_name || "-");
        document.querySelectorAll(".info .current_collection_id p").forEach(el => el.textContent = p.collections_name || "-");

        const desc = document.querySelector(".description p");
        if (desc) desc.textContent = p.paintings_description || "-";
    }
}

//  Стили
function loadStyles(data) {
    const container = document.querySelector(".styles");

    if (container && data.styles) {
        container.innerHTML = "";

        data.styles.forEach(s => {
            const card = document.createElement("div");
            card.className = "styles_card";

            card.innerHTML = `
                <img src="${s.photo_styles || 'default_style.jpg'}">
                <div class="card_body">
                    <h3>${s.name}</h3>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem("styleId", s.id);
                window.location.href = "style.html";
            };

            container.appendChild(card);
        });
    }

    const id = localStorage.getItem("styleId");
    if (id && data.styles) {
        const s = data.styles.find(x => x.id == id);
        if (!s) return;

        if (document.getElementById("name_styles"))
            document.getElementById("name_styles").textContent = s.name;

        const img = document.querySelector(".photo_styles img");
        if (img) img.src = s.photo_styles || 'default_style.jpg';

        document.querySelectorAll(".info_styles .name_styles p").forEach(el => el.textContent = s.name);
        document.querySelectorAll(".info_styles .period_styles p").forEach(el => el.textContent = s.period || "-");

        const desc = document.querySelector(".description_styles p");
        if (desc) desc.textContent = s.description || "-";
    }
}

//  Музеи 
function loadMuseums(data) {
    const container = document.querySelector(".museums");

    if (container && data.museums) {
        container.innerHTML = "";

        data.museums.forEach(m => {
            const card = document.createElement("div");
            card.className = "museums_card";

            card.innerHTML = `
                <img src="${m.photo_museums || 'default_museum.jpg'}">
                <div class="card_body">
                    <h3>${m.name}</h3>
                    <p>${m.city || "-"}, ${m.country || "-"}</p>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem("museumId", m.id);
                window.location.href = "museum.html";
            };

            container.appendChild(card);
        });
    }

    const id = localStorage.getItem("museumId");
    if (id && data.museums) {
        const m = data.museums.find(x => x.id == id);
        if (!m) return;

        if (document.getElementById("name_museum"))
            document.getElementById("name_museum").textContent = m.name;

        const img = document.querySelector(".photo_museums img");
        if (img) img.src = m.photo_museums || 'default_museum.jpg';

        document.querySelectorAll(".info_museum .name_museum p").forEach(el => el.textContent = m.name);
        document.querySelectorAll(".info_museum .city_museum p").forEach(el => el.textContent = m.city || "-");
        document.querySelectorAll(".info_museum .country_museum p").forEach(el => el.textContent = m.country || "-");

        const desc = document.querySelector(".description_museum p");
        if (desc) desc.textContent = m.description || "-";
    }
}

//  Жанры 
function loadGenres(data) {
    const container = document.querySelector(".genres");

    if (container && data.genres) {
        container.innerHTML = "";

        data.genres.forEach(g => {
            const card = document.createElement("div");
            card.className = "genres_card";

            card.innerHTML = `
                <img src="${g.photo_genres || 'default_genre.jpg'}">
                <div class="card_body">
                    <h3>${g.name}</h3>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem("genreId", g.id);
                window.location.href = "genre.html";
            };

            container.appendChild(card);
        });
    }

    const id = localStorage.getItem("genreId");
    if (id && data.genres) {
        const g = data.genres.find(x => x.id == id);
        if (!g) return;

        if (document.getElementById("name_genres"))
            document.getElementById("name_genres").textContent = g.name;

        const img = document.querySelector(".photo_genres img");
        if (img) img.src = g.photo_genres || 'default_genre.jpg';

        const desc = document.querySelector(".description_genres p");
        if (desc) desc.textContent = g.description || "-";
    }
}

//  Коллекции 
function loadCollections(data) {
    const container = document.querySelector(".private_collection");

    if (container && data.collections) {
        container.innerHTML = "";

        data.collections.forEach(c => {
            const card = document.createElement("div");
            card.className = "private_collection_card";

            card.innerHTML = `
                <img src="${c.photo_collections || 'default_collection.jpg'}">
                <div class="card_body">
                    <h3>${c.name}</h3>
                    <p>${c.owner_name || "-"}</p>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem("collectionId", c.id);
                window.location.href = "collection.html";
            };

            container.appendChild(card);
        });
    }

    const id = localStorage.getItem("collectionId");
    if (id && data.collections) {
        const c = data.collections.find(x => x.id == id);
        if (!c) return;

        if (document.getElementById("name"))
            document.getElementById("name").textContent = c.name;

        const img = document.querySelector(".photo_collections img");
        if (img) img.src = c.photo_collections || 'default_collection.jpg';

        document.querySelectorAll(".info .name p").forEach(el => el.textContent = c.name);
        document.querySelectorAll(".info .owner_name p").forEach(el => el.textContent = c.owner_name || "-");
        document.querySelectorAll(".info .city p").forEach(el => el.textContent = c.city || "-");
        document.querySelectorAll(".info .country p").forEach(el => el.textContent = c.country || "-");

        const desc = document.querySelector(".description p");
        if (desc) desc.textContent = c.description || "-";
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData();

    loadArtists(data);
    loadPaintings(data);
    loadStyles(data);
    loadMuseums(data);
    loadGenres(data);
    loadCollections(data);
});

// Сообщения
document.getElementById("contactForm").addEventListener("submit", async e => {
    e.preventDefault();
    // данные от пользователя
    const mail_client = document.getElementById("mail_client").value;
    // создаем FormData
    const formData = new FormData();
    formData.append("mail_client", document.getElementById("mail_client").value);
    formData.append("message", document.getElementById("message").value);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail_client)) {
        alert("Неправильный email!");
        return;
    }
    // отправка данных на сервер
    await fetch("http://localhost/myserver/post_message.php", {
        method: "POST",
        body: formData
    });

    alert("Сообщение отправлено!");
    // очистка формы
    document.getElementById("contactForm").reset();
});

// Подписка
document.getElementById("subscribeForm").addEventListener("submit", async e => {
    e.preventDefault();
    // получаем данные от пользователя
    const sub_name = document.getElementById("sub_name").value;
    const telephone = document.getElementById("sub_telephone").value;
    const email = document.getElementById("sub_email").value;
    //  создаем FormData
    const formData = new FormData();
    formData.append("name", document.getElementById("sub_name").value);
    formData.append("telephone", document.getElementById("sub_telephone").value);
    formData.append("email", document.getElementById("sub_email").value);
    // прием данных из interesting и radio
    formData.append("frequency", document.querySelector('input[name="frequency"]:checked')?.value || "");
    formData.append("interesting", document.getElementById("interesting").value);
    // валедация форм
    if (!/^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$/.test(sub_name)) {
        alert("ФИО должно быть в формате: Иванов Иван Иванович");
        return;
    }

    // if (!/^\+7 \d{3}\d{3}\d{2}-\d{2}$/.test(telephone)) {
    //     alert("Неправильный номер телефона!");
    //     return;
    // }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Неправильный email!");
        return;
    }
    // отправка данных на сервер
    await fetch("http://localhost/myserver/post_mailing.php", {
        method: "POST",
        body: formData
    });

    alert("Вы подписались на рассылку!");
    // очистка формы
    e.target.reset();
});