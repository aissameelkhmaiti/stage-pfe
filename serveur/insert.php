<?php
// Connexion à la base de données
require 'conn.php';
// Récupérer les données du formulaire envoyées en JSON
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData);
// Récupérer les valeurs des champs
$NumeroDeTicket = $data->NumeroDeTicket;
$SN = $data->SN;
$Equipement = $data->Equipement;
$Model = $data->Model;
$NaturePane = $data->NaturePane;
$Utilisateur = $data->Utilisateur;
$DateOuverture = $data->DateOuverture;
$DateAffectation = $data->DateAffectation;
$CodeCloture = $data->CodeCloture;
$Remarque = $data->Remarque;
$TicketFE = $data->TicketFE;
$DateResolution = $data->DateResolution;
$NatureResolution = $data->NatureResolution;
 


$sql = "INSERT INTO tickets (NumeroDeTicket,SN,Equipement,Model,NaturePane,Utilisateur,DateOuverture,DateAffectation,CodeCloture,Remarque,DateCloture,TicketFE,DateResolution,NatureResolution) VALUES ('$NumeroDeTicket','$SN','$Equipement','$Model','$NaturePane','$Utilisateur','$DateOuverture','$DateAffectation','$CodeCloture','$Remarque','$DateCloture','$TicketFE','$DateResolution','$NatureResolution')";
$EXquery=mysqli_query($con,$sql);
if (isset($EXquery)) {

	 //echo "<h1> ok</h1>";
	header("location:http://localhost/Gestion_incident/client/html/user/index.html");
}else{
	echo "<h1>The object not added </h1>";
	// code...
}

?>