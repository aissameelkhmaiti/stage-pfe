<?php
require "conn.php";
$NumeroDeTicket = $_POST['NumeroDeTicket'];
$sql = "SELECT * FROM `tickets` WHERE `NumeroDeTicket` = '$NumeroDeTicket'";
$sqlexec = mysqli_query($con , $sql);
if($sqlexec){
    if(mysqli_num_rows($sqlexec) > 0){
        $result= true;
        echo json_encode($result);
    } else {
        $result= false;
        echo json_encode($result);
    }
} else {
    $result= 'error: ' . mysqli_error($con);
    echo json_encode($result);
}
?>