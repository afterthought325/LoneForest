<?php
//set_include_path('/home/dcspa/public_html/LoneForest/');
// set_include_path('C:\xampp\htdocs\TestLoneForest\LoneForest');
require_once '../login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) die($connection->connect_error);

session_start();
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    }
else die("ERROR: USERNAME MISSING FROM SESSION");

if(isset($_GET['get_username'])){
    $status = $_GET['get_username'];
    if($status == "true"){
        echo $username;
    }
}

//Return First name upon request
if(isset($_GET['get_forename'])){
    $status = $_GET['get_forename'];
    if($status == "true"){
        $query = "SELECT forename FROM `users` WHERE username='$username';";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo $row['forename'];
    }
}

//Request Last Name upon request
if(isset($_GET['get_surname'])){
    $status = $_GET['get_surname'];
    if($status == "true"){
        $query = "SELECT surname FROM `users` WHERE username='$username';";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo $row['surname'];
    }
}

//Request Password upon request
if(isset($_GET['get_hash_pass'])){
    $status = $_GET['get_hash_pass'];
    if($status == "true"){
        $query = "SELECT password FROM `users` WHERE username='$username';";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo $row['password'];
    }
}

//Request Inventory upon request
if(isset($_GET['get_inventory'])){
    $status = $_GET['get_inventory'];
    if($status == "true"){
        $query = "SELECT inventory FROM `users` WHERE username='$username';";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo $row['inventory'];
    }
}

//Request Current Location upon request
if(isset($_GET['get_current_location'])){
    $status = $_GET['get_current_location'];
    if($status == "true"){
        $query = "SELECT location FROM `users` WHERE username='$username';";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo $row['location'];
    }
}

//updates inventory upon request
if(isset($_POST['set_inventory'])){
    $inventory = $_POST['set_inventory'];
    $query = "UPDATE users SET inventory=$inventory WHERE username='$username';";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}

//updates inventory upon request
if(isset($_POST['set_current_location'])){
    $location = $_POST['set_current_location'];
    $query = "UPDATE users SET location=$current_location WHERE username='$username';";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}


?>
