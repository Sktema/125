<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	$arg = array( $data["login"] );
	$sql = "SELECT Password, id FROM user WHERE Login = ?";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() > 0) {
		$row = $prep->fetch();

		if ( password_verify($data["password"], $row["Password"]) ) {
			echo "Успешно";

			$_SESSION["active_login"] = $row["id"];
		} else {
			echo "Неверный пароль";
		}
	} else {
		echo "Неверный логин";
	}
?>