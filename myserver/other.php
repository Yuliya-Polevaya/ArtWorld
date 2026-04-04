<?php
// Взаимодействие с БД
/*
try {
    $host = '127.0.0.1';
    $db = 'test';
    $user = 'root';
    $pass = '';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    // Получение объекта PDO
    $pdo = new PDO($dsn, $user, $pass, $opt);
    var_dump($pdo);
    echo "<br/>";

    // Получение данных из таблицы student по полю name
    $stmt = $pdo->query('SELECT * FROM student');
    var_dump($stmt);
    echo "<br/>";
    while ($row = $stmt->fetch())
    {
        echo $row['name']." ".$row['ote']." ".$row['stepen']." ".$row['dr_st'];
        echo "<br/>";
        //printf("%d", $row['stepen']);
    }
    // Вставка данных
    $title = "Ложка";
    $month = "Март";
    $year = "2026";
    $cost = 100;
    $col = 5;


    $stmt = $pdo->prepare("INSERT INTO product (title, month,year,cost,col) VALUES (?, ?, ?, ?, ?)");
    $stmt->bindParam(1, $title);
    $stmt->bindParam(2, $month);
    $stmt->bindParam(3, $year);
    $stmt->bindParam(4, $cost);
    $stmt->bindParam(5, $col);
    $stmt->execute();

    // delete
    $inner_name = "Чайник";
    $stmt = $pdo->prepare ("DELETE FROM product WHERE title=:name");
    $stmt -> bindParam(':name', $inner_name);
    $stmt -> execute();

    // update

    $title_new = "Чайник";
    $id = 11;
    $stmt = $pdo->prepare ("UPDATE product SET title = :name WHERE id = :id");
    $stmt -> bindParam(':name', $title_new);
    $stmt -> bindParam(':id', $id);
    $stmt -> execute();

} catch (PDOException $e) {
    die('Подключение не удалось: ' . $e->getMessage());
}

$pdo = null;

// join
try {
    $host = '127.0.0.1';
    $db = 'librery';
    $user = 'root';
    $pass = '';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    // Получение объекта PDO
    $pdo = new PDO($dsn, $user, $pass, $opt);

    $idn = 14;
    $stmt = $pdo->prepare ("SELECT product.name FROM product JOIN sub_category ON product.id=sub_category.prod_id JOIN category ON sub_category.cat_id = category.id WHERE product.id=:id");
    $stmt -> bindParam(':id', $idn);
    $stmt -> execute();
    echo "-----------------";
//    var_dump($stmt);
    echo "<br/>";
    while ($row = $stmt->fetch())
    {
        echo $row['name'];
        echo "<br/>";
        //printf("%d", $row['stepen']);
    }


} catch (PDOException $e) {
    die('Подключение не удалось_2: ' . $e->getMessage());
}
*/

//
//
//echo "<pre>";
//print_r($_SERVER);
//echo "</pre>";
//
//echo "=====================================================================";
//echo "<br/>";
//
//$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
//echo $url;
//
//echo "=====================================================================";
//echo "<br/>";
//
//echo "<pre>";
//var_dump(parse_url($url));
//var_dump(parse_url($url, PHP_URL_SCHEME));
//var_dump(parse_url($url, PHP_URL_USER));
//var_dump(parse_url($url, PHP_URL_PASS));
//var_dump(parse_url($url, PHP_URL_HOST));
//var_dump(parse_url($url, PHP_URL_PORT));
//var_dump(parse_url($url, PHP_URL_PATH));
//var_dump(parse_url($url, PHP_URL_QUERY));
//var_dump(parse_url($url, PHP_URL_FRAGMENT));
//echo "</pre>";
//echo "=====================================================================";
//echo "<br/>";
//
//echo "<pre>";
//print_r($_POST);
//echo "</pre>";
//
//echo "=====================================================================";
//echo "<br/>";
//
//echo "<pre>";
//print_r($_GET);
//echo "</pre>";
//
//echo "===============================роутор======================================";
//echo "<br/>";
