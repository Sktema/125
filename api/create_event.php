<?php 
	session_start();

	include 'database.php';
	include 'readjson.php';

	switch ($data["type"]) {
		case 'emergency':
		case 'fire':
		case 'search_and_rescue':
		case 'material_help':
		case 'animals':
		case 'ecology':
			$type = $data["type"];
			break;
		
		default:
			echo "Неизветсный тип";
			die();
	}

	$arg = array( $data["type"], $data["description"], date('Y-m-d H:i') );
	$sql = "INSERT INTO event VALUES (NULL, ?, ?, ?, NULL, NULL)";

	$ok = $pdo->prepare($sql)->execute($arg);

	if ($ok == false) {
		echo "Не удалось";
	} else {
		echo "Успешно";
	}
?>