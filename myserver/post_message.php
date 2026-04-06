<?php
include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if($_POST !== null){

    // messages
    $mail_client = $_POST['mail_client'];
    $message = $_POST['message'];

    $stmt = $pdo->prepare("INSERT INTO messages (mail_client, message) VALUES (?, ?)");
    $stmt->bindParam(1, $mail_client);
    $stmt->bindParam(2, $message);
    $stmt->execute();

} else {
    return false;
}
