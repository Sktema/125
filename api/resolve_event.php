<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}

	$arg = array( $_SESSION["active_login"], $data["event_id"] );
	$sql = "SELECT 1 FROM user_on_event WHERE user_id = ? AND event_id = ?";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Вы не являетесь участником этой заявки";
		die();
	}

	$arg = array( date('Y-m-d H:i'), $data["event_id"] );
	$sql = "UPDATE event SET ResolvedTime = ? WHERE id = ?";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}

	echo "Успешно";
?>