<?php
$servername = "127.0.0.1";
$username = "php_user";
$password = "EEbaws@WE#9";
$database = "my_database";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
