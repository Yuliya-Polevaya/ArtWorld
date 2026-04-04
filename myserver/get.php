<?php
include_once "pdo.php";

$db = new DB();
$pdo = $db->connect();

if($_GET !== null){
        // Получение данных из таблицы student по полю id
        $id = intval($_GET['id']);
        $stmt = $pdo->prepare("SELECT name FROM student WHERE id=?");
        $stmt->bindParam(1, $id);
        $stmt->execute();

    $results = $stmt->fetchAll();
    print_r($results);

}else{
    return false;
}