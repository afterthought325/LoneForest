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
if(isset($_GET['get_location'])){
    $status = $_GET['get_location'];
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
    $invEncode = json_encode($inventory);
    $query = "UPDATE users SET inventory='$invEncode' WHERE username='$username';";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}
if(isset($_POST['clear_inventory'])){
    $query = "UPDATE users SET inventory=\"[]\" WHERE username='$username';";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}

//updates location upon request
if(isset($_POST['set_location'])){
    $location = $_POST['set_location'];
    $query = "UPDATE users SET location=$location WHERE username='$username';";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "$location";
}

//updates death count
if(isset($_POST['set_deaths'])){
    $query = "UPDATE statistics SET deaths=deaths+1;";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}
//updates win count
if(isset($_POST['set_wins'])){
    $query = "UPDATE statistics SET wins=wins+1;";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}
//updates kidneys donated
if(isset($_POST['set_kidneys'])){
    $query = "UPDATE statistics SET kidneys=kidneys+1;";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}


?>
