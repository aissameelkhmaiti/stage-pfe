<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Effectuez ici la vérification des identifiants
// par exemple, vérifiez les informations dans une base de données

if ($username === "utilisateur" && $password === "motdepasse") {
  header("http://localhost/gestion_incident/client/html/login.html");
} else {
  echo "error";
}
?>

