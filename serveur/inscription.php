<?php
// Connexion à la base de données
require 'conn.php';
// Récupérer les données du formulaire envoyées en JSON
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData);
// Récupérer les valeurs des champs
$identifiant = $data->identifiant;
$motdepasse = $data->motdepasse;
$email = $data->email;
$tel = $data->tel;

$sql = "INSERT INTO connexion (identifiant,motdepasse,email,tel) VALUES ('$identifiant','$motdepasse','$email','$tel')";
$EXquery=mysqli_query($con,$sql);
if (isset($EXquery)) {

	 //echo "<h1> ok</h1>";
	header("location:http://localhost/Gestion_incident/client/html/user/index.html");
}else{
	echo "<h1>The object not added </h1>";
	// code...
}

?>