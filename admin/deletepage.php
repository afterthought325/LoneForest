<?php
require_once '../login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) die($connection->connect_error);
if(isset($_POST['userName'])){
    $userID = $_POST['userName'];
    if(!empty($_POST['userName'])){
    
        $query = "DELETE FROM users WHERE username='$userID'";
        $result = $connection->query($query);
    }
    if($result){
        echo "Record deleted successfully";
    }else{
        echo "Sorry, record could not be deleted";
    }
}
$connection->close();
?>