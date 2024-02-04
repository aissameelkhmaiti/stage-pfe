<?php
require "conn.php";
$NumeroDeTicket=$_POST['NumeroDeTicket'];
$SN=$_POST['SN'];
$Equipement=$_POST['Equipement'];
$Model=$_POST['Model'];
$NaturePane=$_POST['NaturePane'];
$Utilisateur=$_POST['Utilisateur'];
$DateOuverture=$_POST['DateOuverture'];
$DateAffectation=$_POST['DateAffectation'];
$CodeCloture=$_POST['CodeCloture'];
$Remarque=$_POST['Remarque'];
$DateDeclaration=$_POST['DateDeclaration'];
$TicketFE=$_POST['TicketFE'];
$DateResolution=$_POST['DateResolution'];
$NatureResolution=$_POST['NatureResolution'];
$sql = "UPDATE `tickets` SET `SN`='$SN',`Equipement`='$Equipement',`Model`='$Model',`NaturePane`='$NaturePane',`Utilisateur`='$Utilisateur',`DateOuverture`='$DateOuverture',`DateAffectation`='$DateAffectation',`Remarque`='$Remarque',`TicketFE`='$TicketFE',`DateResolution`='$DateResolution',`NatureResolution`='$NatureResolution',`DateDeclaration`='$DateDeclaration'  WHERE `NumeroDeTicket`='$NumeroDeTicket'";
$run_sql=mysqli_query($con,$sql);
if($run_sql){
    $result = "true";
    echo json_encode($result);
}else{
    $result = "error";
    echo json_encode($result);
}
?>