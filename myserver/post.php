<?php
// Взаимодействие с front

include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if($_POST !== null){

//        $nickname = $_POST['nickname'];
//        $pass = $_POST['pass'];

    $nickname = "nickname";
    $pass = "pass";

        $stmt = $pdo->prepare("INSERT INTO regbasa (nickname, pass) VALUES (?, ?)");
        $stmt->bindParam(1, $nickname);
        $stmt->bindParam(2, $pass);
        $stmt->execute();
}else{
    return false;
}
