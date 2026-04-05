// main.js

async function fetchData() {
    const response = await fetch("http://localhost/ArtWorld/myserver/get.php");
    return await response.json();
}

// ------------------ Художники ------------------
async function loadArtists(data) {
    const container = document.querySelector(".artists");
    if (!container || !data.artists) return;
    container.innerHTML = "";

    data.artists.forEach(a => {
        const card = document.createElement("div");
        card.className = "artists_card";
        card.dataset.id = a.id;

        card.innerHTML = `
            <img src="${a.photo_artist || 'default_artist.jpg'}" alt="${a.art_name}">
            <div class="card_body">
                <h3 class="card_art_name">${a.art_name}</h3>
                <p class="card_country">${a.country || "-"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("artistId", a.id);
            window.location.href = "artist.html";
        });

        container.appendChild(card);
    });

    // Страница artist.html
    const artistId = localStorage.getItem("artistId");
    if (!artistId) return;
    const artist = data.artists.find(a => a.id == artistId);
    if (!artist) return;

    const artNameEl = document.getElementById("art_name");
    if (artNameEl) artNameEl.textContent = artist.art_name;
    const imgEl = document.querySelector(".photo_artist img");
    if (imgEl) imgEl.src = artist.photo_artist || 'default_artist.jpg';

    document.querySelectorAll(".info .art_name p").forEach(el => el.textContent = artist.art_name);
    document.querySelectorAll(".info .date_of_birth p").forEach(el => el.textContent = artist.date_of_birth || "-");
    document.querySelectorAll(".info .date_of_death p").forEach(el => el.textContent = artist.date_of_death || "-");
    document.querySelectorAll(".info .country p").forEach(el => el.textContent = artist.country || "-");
    const bioEl = document.querySelector(".biography p");
    if (bioEl) bioEl.textContent = artist.biography || "-";
}

// ------------------ Галерея картин ------------------
async function loadPaintings(data) {
    const container = document.querySelector(".paintings");
    if (!container || !data.paintings) return;
    container.innerHTML = "";

    data.paintings.forEach(p => {
        const card = document.createElement("div");
        card.className = "paintings_card";

        card.innerHTML = `
            <img src="${p.paintings_picture || 'default_paint.jpg'}" alt="${p.paintings_title}">
            <div class="card_body">
                <h3 class="card_title">${p.paintings_title}</h3>
                <p class="card_artist">${p.artists_name || "-"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("paintId", p.paintings_id);
            window.location.href = "picture.html";
        });

        container.appendChild(card);
    });

    // Страница picture.html
    const paintId = localStorage.getItem("paintId");
    if (!paintId) return;
    const paint = data.paintings.find(p => p.paintings_id == paintId);
    if (!paint) return;

    const titleEl = document.getElementById("title");
    if (titleEl) titleEl.textContent = paint.paintings_title;
    const imgEl = document.querySelector(".picture img");
    if (imgEl) imgEl.src = paint.paintings_picture || 'default_paint.jpg';

    document.querySelectorAll(".info .title p").forEach(el => el.textContent = paint.paintings_title);
    document.querySelectorAll(".info .year_created p").forEach(el => el.textContent = paint.paintings_year_created || "-");
    document.querySelectorAll(".info .artist_id p").forEach(el => el.textContent = paint.artists_name || "-");
    document.querySelectorAll(".info .genre_id p").forEach(el => el.textContent = paint.genres_name || "-");
    document.querySelectorAll(".info .style_id p").forEach(el => el.textContent = paint.styles_name || "-");
    document.querySelectorAll(".info .height_cm p").forEach(el => el.textContent = paint.paintings_height_cm || "-");
    document.querySelectorAll(".info .width_cm p").forEach(el => el.textContent = paint.paintings_width_cm || "-");
    document.querySelectorAll(".info .material p").forEach(el => el.textContent = paint.paintings_material || "-");
    document.querySelectorAll(".info .technique p").forEach(el => el.textContent = paint.paintings_technique || "-");
    document.querySelectorAll(".info .current_museum_id p").forEach(el => el.textContent = paint.museums_name || "-");
    document.querySelectorAll(".info .current_collection_id p").forEach(el => el.textContent = paint.collections_name || "-");
    const descEl = document.querySelector(".description p");
    if (descEl) descEl.textContent = paint.paintings_description || "-";
}

// ------------------ Стили ------------------
async function loadStyles(data) {
    const container = document.querySelector(".styles");
    if (!container || !data.styles) return;
    container.innerHTML = "";

    data.styles.forEach(s => {
        const card = document.createElement("div");
        card.className = "styles_card";

        card.innerHTML = `
            <img src="${s.photo_styles || 'default_style.jpg'}" alt="${s.name}">
            <div class="card_body">
                <h3>${s.name}</h3>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("styleId", s.id);
            window.location.href = "style.html";
        });

        container.appendChild(card);
    });

    const styleId = localStorage.getItem("styleId");
    if (!styleId) return;
    const style = data.styles.find(s => s.id == styleId);
    if (!style) return;

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = style.name;
    const imgEl = document.querySelector(".photo_styles img");
    if (imgEl) imgEl.src = style.photo_styles || 'default_style.jpg';

    document.querySelectorAll(".info .name p").forEach(el => el.textContent = style.name);
    document.querySelectorAll(".info .period p").forEach(el => el.textContent = style.period || "-");
    const descEl = document.querySelector(".description p");
    if (descEl) descEl.textContent = style.description || "-";
}

// ------------------ Музеи ------------------
async function loadMuseums(data) {
    const container = document.querySelector(".museums");
    if (!container || !data.museums) return;
    container.innerHTML = "";

    data.museums.forEach(m => {
        const card = document.createElement("div");
        card.className = "museums_card";

        card.innerHTML = `
            <img src="${m.photo_museums || 'default_museum.jpg'}" alt="${m.name}">
            <div class="card_body">
                <h3>${m.name}</h3>
                <p>${m.city || "-"}, ${m.country || "-"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("museumId", m.id);
            window.location.href = "museum.html";
        });

        container.appendChild(card);
    });

    const museumId = localStorage.getItem("museumId");
    if (!museumId) return;
    const museum = data.museums.find(m => m.id == museumId);
    if (!museum) return;

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = museum.name;
    const imgEl = document.querySelector(".photo_museums img");
    if (imgEl) imgEl.src = museum.photo_museums || 'default_museum.jpg';

    document.querySelectorAll(".info .name p").forEach(el => el.textContent = museum.name);
    document.querySelectorAll(".info .city p").forEach(el => el.textContent = museum.city || "-");
    document.querySelectorAll(".info .country p").forEach(el => el.textContent = museum.country || "-");
    const descEl = document.querySelector(".description p");
    if (descEl) descEl.textContent = museum.description || "-";
}

// ------------------ Жанры ------------------
async function loadGenres(data) {
    const container = document.querySelector(".genres");
    if (!container || !data.genres) return;
    container.innerHTML = "";

    data.genres.forEach(g => {
        const card = document.createElement("div");
        card.className = "genres_card";

        card.innerHTML = `
            <img src="${g.photo_genres || 'default_genre.jpg'}" alt="${g.name}">
            <div class="card_body">
                <h3>${g.name}</h3>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("genreId", g.id);
            window.location.href = "genre.html";
        });

        container.appendChild(card);
    });

    const genreId = localStorage.getItem("genreId");
    if (!genreId) return;
    const genre = data.genres.find(g => g.id == genreId);
    if (!genre) return;

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = genre.name;
    const imgEl = document.querySelector(".photo_genres img");
    if (imgEl) imgEl.src = genre.photo_genres || 'default_genre.jpg';

    const descEl = document.querySelector(".description p");
    if (descEl) descEl.textContent = genre.description || "-";
}

// ------------------ Частные коллекции ------------------
async function loadCollections(data) {
    const container = document.querySelector(".private_collection");
    if (!container || !data.collections) return;
    container.innerHTML = "";

    data.collections.forEach(c => {
        const card = document.createElement("div");
        card.className = "private_collection_card";

        card.innerHTML = `
            <img src="${c.photo_collections || 'default_collection.jpg'}" alt="${c.name}">
            <div class="card_body">
                <h3 class="card_name">${c.name}</h3>
                <p class="card_owner_name">${c.owner_name || "-"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("collectionId", c.id);
            window.location.href = "collection.html";
        });

        container.appendChild(card);
    });

    const collectionId = localStorage.getItem("collectionId");
    if (!collectionId) return;
    const col = data.collections.find(c => c.id == collectionId);
    if (!col) return;

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = col.name;
    const imgEl = document.querySelector(".photo_collections img");
    if (imgEl) imgEl.src = col.photo_collections || 'default_collection.jpg';

    document.querySelectorAll(".info .name p").forEach(el => el.textContent = col.name);
    document.querySelectorAll(".info .owner_name p").forEach(el => el.textContent = col.owner_name || "-");
    document.querySelectorAll(".info .city p").forEach(el => el.textContent = col.city || "-");
    document.querySelectorAll(".info .country p").forEach(el => el.textContent = col.country || "-");
    const descEl = document.querySelector(".description p");
    if (descEl) descEl.textContent = col.description || "-";
}

// ------------------ Вызов всех функций ------------------
document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData();
    loadArtists(data);
    loadPaintings(data);
    loadStyles(data);
    loadMuseums(data);
    loadGenres(data);
    loadCollections(data);
});