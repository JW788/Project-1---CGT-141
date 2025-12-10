<?php session_start(); ?>
<!DOCTYPE html>
<html>
<body>
<form action="login_action.php" method="POST">
    Username: <input type="text" name="username" required><br><br>
    Password: <input type="text" name="password" required><br><br>
    <input type="submit" value="Login">
</form>
</body>
</html>
