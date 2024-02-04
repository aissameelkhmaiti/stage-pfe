<?php
require "conn.php";
$NumeroDeTicket = $_GET['NumeroDeTicket'];
$querySQL="SELECT * FROM tickets WHERE `NumeroDeTicket` = '$NumeroDeTicket'";
$queryResult=mysqli_query($con, $querySQL);

if($queryResult){
    if(mysqli_num_rows($queryResult) > 0){
        $arr = [];
while ($rows=mysqli_fetch_assoc($queryResult)) {
	$object = new stdClass();
	$object->NumeroDeTicket = $rows['NumeroDeTicket'] ;
    $object->SN = $rows['SN'] ;
	$object->Equipement = $rows['Equipement'] ;
	$object->Model = $rows['Model'];
	$object->NaturePane = $rows['NaturePane'];
	$object->Utilisateur = $rows['Utilisateur'] ;
    $object->DateOuverture = $rows['DateOuverture'] ;
	$object->DateAffectation = $rows['DateAffectation'];
	$object->DateCloture = $rows['DateCloture'];
	$object->Remarque = $rows['Remarque'];
	$object->TicketFE = $rows['TicketFE'];
	$object->DateResolution = $rows['DateResolution'];
	$object->NatureResolution = $rows['NatureResolution'];
	$object->DateDeclaration = $rows['DateDeclaration'];
	$arr[] = $object;	
}
echo json_encode($arr);
    } else {
        $result= false;
        echo json_encode($result);
    }
} else {
    $result= 'error: ' . mysqli_error($con);
    echo json_encode($result);
}
?>