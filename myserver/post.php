<?php
include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if($_POST !== null){

    // messages
    $mail_client = "mail_client";
    $message = "message";

    $stmt = $pdo->prepare("INSERT INTO messages (mail_client, message) VALUES (?, ?)");
    $stmt->bindParam(1, $mail_client);
    $stmt->bindParam(2, $message);
    $stmt->execute();

    // mailing
    $name = "name";
    $telephone = "telephone";
    $email = "email";
    $frequency = "frequency";
    $interesting = "interesting";

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
