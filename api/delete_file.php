<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}

	$arg = array( $data["file_id"], $_SESSION["active_login"] );
	$sql = "DELETE FROM file WHERE id = ? AND user_id = ?";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok == false) {
		echo "Не ваш файл";
	} else {
		echo "Успешно";
	}
?>