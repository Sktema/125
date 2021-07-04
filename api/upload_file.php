<?php 
	session_start();

	include 'database.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}

	$arg = array( $_SESSION["active_login"], $_POST["event_id"] );
	$sql = "SELECT 1 FROM user_on_event WHERE user_id = ? AND event_id = ?";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Вы не являетесь участником этой заявки";
		die();
	}

	$file_data = file_get_contents($_FILES["blob"]["tmp_name"]);
	$arg = array( date('Y-m-d H:i'), $_FILES["blob"]["name"], $file_data, $_POST["event_id"], $_SESSION["active_login"] );
	$sql = "INSERT INTO file VALUES (NULL, ?, ?, ?, ?, ?)";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}

	echo "Успешно";
?>