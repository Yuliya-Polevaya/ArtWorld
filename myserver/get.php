<?php
include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if ($_GET !== null) {

    // artists
    $stmt = $pdo->prepare("SELECT * FROM artists");
    $stmt->execute();
    $artists = $stmt->fetchAll();
    print_r($artists);

    // collections
    $stmt = $pdo->prepare("SELECT * FROM collections");
    $stmt->execute();
    $collections = $stmt->fetchAll();
    print_r($collections);

    // genres
    $stmt = $pdo->prepare("SELECT * FROM genres");
    $stmt->execute();
    $genres = $stmt->fetchAll();
    print_r($genres);

    // museums
    $stmt = $pdo->prepare("SELECT * FROM museums");
    $stmt->execute();
    $museums = $stmt->fetchAll();
    print_r($museums);

    // paintings
    $stmt = $pdo->prepare("
        SELECT 
            paintings.id AS paintings_id,
            paintings.title AS paintings_title,
            paintings.year_created AS paintings_year_created,
            artists.name AS artists_name,
            genres.name AS genres_name,
            styles.name AS styles_name,
            paintings.description AS paintings_description,
            paintings.height_cm AS paintings_height_cm,
            paintings.width_cm AS paintings_width_cm,
            paintings.material AS paintings_material,
            paintings.technique AS paintings_technique,
            museums.name AS museums_name,
            collections.name AS collections_name,
            paintings.picture AS paintings_picture
        FROM paintings
        LEFT JOIN artists ON paintings.artist_id = artists.id
        LEFT JOIN genres ON paintings.genre_id = genres.id
        LEFT JOIN styles ON paintings.style_id = styles.id
        LEFT JOIN museums ON paintings.current_museum_id = museums.id
        LEFT JOIN collections ON paintings.current_collection_id = collections.id
    ");
    $stmt->execute();
    $paintings = $stmt->fetchAll();

    // styles
    $stmt = $pdo->prepare("SELECT * FROM styles");
    $stmt->execute();
    $styles = $stmt->fetchAll();
    print_r($styles);

} else {
    return false;
}