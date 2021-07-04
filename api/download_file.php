<?php 
	session_start();

	include 'database.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}

	$arg = array( $_GET["file_id"], $_SESSION["active_login"] );
	$sql = "SELECT file.Name, file.Blob FROM user_on_event, file WHERE file.id = ? AND user_on_event.user_id = ? AND user_on_event.event_id = file.event_id";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute($arg);

	if ($ok & $prep->rowCount() == 0) {
		echo "Вы не являетесь участником этой заявки";
		die();
	}

	$row = $prep->fetch();

	$name = $row["Name"];
	$blob = $row["Blob"];

	header("Content-Disposition: attachment; filename=\"$name\"");
	echo $blob;
?>