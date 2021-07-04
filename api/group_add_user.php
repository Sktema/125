<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 3) {
		echo "Отказано в доступе";
		die();
	}

	switch ($data["group"]) {
		case 'emergency':
		case 'fire':
		case 'search_and_rescue':
		case 'material_help':
		case 'animals':
		case 'ecology':
			$table = "whitelist_" . $data["group"];
			break;
		
		default:
			echo "Неизвестная группа";
			die();
	}
	

	$arg = array( $data["user_id"] );
	$sql = "INSERT INTO $table VALUES (?)";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
	} else {
		echo "Успешно";
	}
?>