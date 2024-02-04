<?php
require "conn.php";
$identifiant = $_GET['identifiant'];
$motdepasse = $_GET['motdepasse'];


$sql = "SELECT * FROM `connexion` WHERE `identifiant` = '$identifiant' AND `motdepasse` = '$motdepasse'";
$sqlexec = mysqli_query($con , $sql);
if($sqlexec){
    if(mysqli_num_rows($sqlexec) > 0){
        session_start();
        $_SESSION['loggedin'] = true;
        echo json_encode($_SESSION['loggedin']);
    } else {
        $result= 'error: Invalid username or password';
        echo json_encode($result);
    }
} else {
    $result= 'error: ' . mysqli_error($con);
    echo json_encode($result);
}
?>