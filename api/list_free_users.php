<?php 
	session_start();

	include 'database.php';

	if (!isset($_SESSION["active_login"]) | get_user_role($pdo, $_SESSION["active_login"]) < 1) {
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

	$sql = "SELECT user_on_event.user_id AS id FROM user_on_event, event WHERE user_on_event.event_id = event.id AND event.ResolvedTime IS NULL";
	$prep = $pdo->prepare($sql);
	$ok = $prep->execute();

	$busy_users = $prep->fetchAll(PDO::FETCH_ASSOC);

	$bad_ids = array();

	foreach ($busy_users as $key => $user) {
		$id = $user["id"];
		$bad_ids[ $id ] = true;
	}

	$sql = "SELECT user.id, user.Login, user.Name, user.Phone, user.Role FROM user, $table WHERE user.id = $table.user_id";
	$prep = $pdo->prepare($sql);
	$ok = $prep->execute();

	$users = $prep->fetchAll(PDO::FETCH_ASSOC);

	$good_ids = array();

	foreach ($users as $key => $user) {
		$id = $user["id"];

		if (isset($bad_ids[$id]))
			continue;

		$good_ids[] = $user;
	}

	echo json_encode($good_ids);
?>