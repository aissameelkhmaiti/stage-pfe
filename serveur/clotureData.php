<?php
require "conn.php";
$NumeroDeTicket=$_POST['NumeroDeTicket'];
$DateDeclaration=$_POST['DateDeclaration'];
$sql = "UPDATE `tickets` SET `DateCloture`='$DateDeclaration' WHERE `NumeroDeTicket`='$NumeroDeTicket'";
$run_sql=mysqli_query($con,$sql);
if($run_sql){
    $result = "true";
    echo json_encode($result);
}else{
    $result = "error";
    echo json_encode($result);
}
?>