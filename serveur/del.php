<?php 
require 'conn.php';
$NumeroDeTicket=$_POST['NumeroDeTicket'];
$query="DELETE  FROM tickets where NumeroDeTicket='$NumeroDeTicket'";
$EXquery=mysqli_query($con,$query);
if (isset($EXquery)) {

	header("location:http://localhost/Gestion_incident/client/html/user/index.html");
}else{
	echo "<h1>The object not deleted </h1>";
}
?>