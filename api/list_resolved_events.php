<?php 
	session_start();

	include 'database.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
		echo "Отказано в доступе";
		die();
	}

	$sql = "SELECT * FROM event WHERE ResolvedTime IS NOT NULL";

	$prep = $pdo->prepare($sql);
	$ok = $prep->execute();

	$data = $prep->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($data);
?>