<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	// Проверка занятости лоигна
	$arg = array( $data["login"] );
	$sql = "SELECT 1 FROM user WHERE Login = ?";

	$used = $pdo->prepare($sql);
	$ok = $used->execute($arg);

	if ($ok & $used->rowCount() > 0) {
		echo "Логин уже занят";
		die();
	}

	$password = $data["password"];

	if (mb_strlen($password) < 8) {
		echo("Слишком короткий пароль");
		die();
	}

	$password_hash = password_hash($password, PASSWORD_DEFAULT);

	// Логин, пароль, имя, телефон
	$arg = array( $data["login"], $password_hash, $data["name"], $data["phone"] );
	$sql = "INSERT INTO user VALUES (NULL, ?, ?, ?, ?, NULL)";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}

	echo "Успешно";
?>