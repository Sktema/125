<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}


	$arg = array( $data["event_id"] );
	$sql = "SELECT * FROM event WHERE id = ? AND ReviewTime IS NOT NULL AND ResolvedTime IS NULL";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Заявка ещё не взята или уже закрыта";
		die();
	}


	$arg = array( $data["user_id"], $data["event_id"] );
	$sql = "DELETE FROM user_on_event WHERE user_id = ? AND event_id = ?";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}

	echo "Успешно";
?>