<?php 
	$data = json_decode( file_get_contents( 'php://input' ), true );

	if (!$data) {
		echo "Не удалось декодировать json!";
		die();
	}
?>