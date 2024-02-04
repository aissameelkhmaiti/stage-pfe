<?php
// Connexion à la base de données
require 'conn.php';
// Récupérer les données du formulaire envoyées en JSON
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData);
// Récupérer les valeurs des champs
$TicketFE = $data->TicketFE;
$Too = $data->Too;
$CC = $data->CC;
$DateResolution = $data->DateResolution;
$NatureResolution = $data->NatureResolution;
$messagee = $data->messagee;
 


$sql = "INSERT INTO fournisseur (TicketFE,Too,CC,DateResolution,NatureResolution,messagee) VALUES ('$TicketFE','$Too','$CC','$DateResolution','$NatureResolution','$messagee')";
$EXquery=mysqli_query($con,$sql);
if (isset($EXquery)) {

	 //echo "<h1> ok</h1>";
	header("location:http://localhost/Gestion_incident/client/html/user/index.html");
}else{
	echo "<h1>The object not added </h1>";
	// code...
}

?>