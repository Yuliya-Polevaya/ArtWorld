<?php
include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if($_POST !== null){

    // mailing
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $frequency = $_POST['frequency'];
    $interesting = $_POST['interesting'];

    $stmt = $pdo->prepare("INSERT INTO mailing (name, telephone, email, frequency, interesting) VALUES (?, ?, ?, ?, ?)");
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $telephone);
    $stmt->bindParam(3, $email);
    $stmt->bindParam(4, $frequency);
    $stmt->bindParam(5, $interesting);
    $stmt->execute();

} else {
    return false;
}
