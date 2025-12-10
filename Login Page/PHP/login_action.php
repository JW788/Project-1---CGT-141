<?php
session_start();
include("db_connect.php");

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM my_users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    header("Location: Profile/index.html");
    exit();
} else {
    echo "<script>
        alert('Login failed. Please try again or register for a new account.');
        if (confirm('Would you like to register?')) {
            window.location.href = 'register.php';
        } else {
            window.location.href = 'index.php';
        }
    </script>";
}
$conn->close();
?>
