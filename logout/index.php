<?php
session_start();
unset($_SESSION['logged_in']);
unset($_SESSION['username']);
unset($_SESSION['isAdmin']);
unset($_SESSION["account_del"]);
unset($_SESSION["pwd_check"]);
header("Location: ../");
exit();

?>
