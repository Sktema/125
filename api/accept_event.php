<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}


	$arg = array( $_SESSION["active_login"] );
	$sql = "SELECT * FROM event, user_on_event WHERE event.ResolvedTime IS NULL AND user_on_event.user_id = ? AND user_on_event.event_id = event.id";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() > 0) {
		echo "У вас уже есть одна открытая заявка";
		die();
	}


	$arg = array( $data["event_id"] );
	$sql = "SELECT * FROM event WHERE id = ? AND ReviewTime IS NULL AND ResolvedTime IS NULL";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Эта заявка уже взята или закрыта";
		die();
	}


	$row = $prep->fetch(PDO::FETCH_ASSOC);
	$group = "whitelist_" . $row["Type"];

	$arg = array( $_SESSION["active_login"] );
	$sql = "SELECT * FROM $group WHERE user_id = ?";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Не ваше направление";
		die();
	}


	$arg = array( date('Y-m-d H:i'), $data["event_id"] );
	$sql = "UPDATE event SET ReviewTime = ? WHERE id = ?";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}


	$arg = array( $_SESSION["active_login"], $data["event_id"] );
	$sql = "INSERT INTO user_on_event VALUES (?, ?)";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
		die();
	}


	echo "Успешно";
?>