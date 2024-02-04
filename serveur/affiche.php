<?php 
require 'conn.php';

$querySQL="SELECT * FROM tickets";

$queryResult=mysqli_query($con, $querySQL);

$arr = [];
//mysqli_fetch_assoc Fetch a result row as an associative array:returned by mysqli_query()
while ($rows=mysqli_fetch_assoc($queryResult)) {
	
	$object = new stdClass();
	$object->NumeroDeTicket = $rows['NumeroDeTicket'] ;
    $object->SN = $rows['SN'] ;
	$object->Equipement = $rows['Equipement'];
	$object->Model = $rows['Model'];
    $object->NaturePane = $rows['NaturePane'];
    $object->Utilisateur = $rows['Utilisateur'];
    $object->DateOuverture = $rows['DateOuverture'];
    $object->DateAffectation = $rows['DateAffectation'];
    $object->CodeCloture = $rows['CodeCloture'];
    $object->Remarque = $rows['Remarque'];
    $object->DateCloture = $rows['DateCloture'];
    $object->TicketFE = $rows['TicketFE'];
    $object->DateDeclaration = $rows['DateDeclaration'];
    $object->DateResolution = $rows['DateResolution'];
    $object->NatureResolution = $rows['NatureResolution'];
	
	$arr[] = $object;

	
}

header("Access-Control-Allow-Origin: *");

echo json_encode($arr);

?>