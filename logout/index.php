<?php
session_start();
$_SESSION['logged_in'] = False;
$_SESSION['username'] = 'no username';
$_SESSION['isAdmin'] = False;
header("Location: /LoneForest/");
exit();

?>
