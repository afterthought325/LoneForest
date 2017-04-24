<?php
require_once '../login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) die($connection->connect_error);
if(isset($_POST['userName'])){
    $userID = $_POST['userName'];
    if(!empty($_POST['userName'])){
        $pw_temp="default";
        $token = hash($algo, "$salt1$pw_temp$salt2");
        $query = "UPDATE users SET password = '$token' WHERE username='$userID'";
        $result = $connection->query($query);
    }
    if($result){
        echo "Password has been changed for the better";
    } else {
        echo "Sorry, that password did not change at all...";
    }
}
$connection->close();
?>